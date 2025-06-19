"use client";
import React, { useContext, useState } from "react";
import ImageSelection from "./_components/ImageSelection";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import CustomLoading from "./_components/CustomLoading";
import AiOutputDialog from "../_components/AiOutputDialog";
import { db } from "@/config/db";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Users } from "@/config/schema";

function CreateNew() {
  const { user } = useUser();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [outputResult,setOutputResult]=useState();
  const [aiOutputImage, setAiOutputImage] = useState();
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [orgImage, setOrgImage] = useState();
  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(formData);
  };

  const GenerateAiImage = async () => {
    setLoading(true);
    const rawImageUrl = await SaveRawImageToFirebase();
    const result = await axios.post("/api/redesign-room", {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result.data);
    await updateUserCredit();
    setAiOutputImage(result.data.result); //Output Image URL
    setOpenOutputDialog(true);
    setLoading(false);
  };

  const updateUserCredit = async () => {
    const result = await db
      .update(Users)
      .set({
        credit: userDetail?.credit - 1,
      })
      .returning({
        id: Users.id,
      });

    if (result) {
      setUserDetail((prev) => ({
        ...prev,
        credit: userDetail?.credit + selectedOption?.credits,
      }));
      return result[0].id;
    }
  };

  const SaveRawImageToFirebase = async () => {
    //Save Raw Image to Firebase

    const fileName = Date.now() + "_raw.png";
    const imageRef = ref(storage, "room-redesign/" + fileName);

    await uploadBytes(imageRef, formData.image).then((resp) => {
      console.log("File Uploaded");
    });

    //Uploaded File Image URL
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
    setOrgImage(downloadURL);
    return downloadURL;
  };

  return (
    <div>
      <h2 className="font-bold text-4xl text-primary text-center">
        Experience the Magic of AI Remodelling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click.Select a space, choose a style, and
        watch as AI instantly reimagines your environment
      </p>
      <div className="grid grid-col-1 md:grid-cols-2  mt-10 gap-10">
        {/* Image Selection */}
        <ImageSelection
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        {/* Form Input Section */}
        <div>
          {/* Room Type */}
          <RoomType
            selectedRoomType={(value) => onHandleInputChange(value, "roomType")}
          />
          {/* Design Type */}
          <DesignType
            selectedDesignType={(value) =>
              onHandleInputChange(value, "designType")
            }
          />
          {/* Specification or Addtiotion Text Area (Optional) */}
          <AdditionalReq
            additionalRequirementInput={(value) =>
              onHandleInputChange(value, "additionalReq")
            }
          />
          {/* Button To Generate Image */}
          <Button className="w-full mt-5" onClick={GenerateAiImage}>
            Generate
          </Button>
          <p className="text-sm text-gray-400 mb-52">
            NOTE:1 Credit will use to redesign your room
          </p>
        </div>
      </div>
      <CustomLoading loading={loading} />
      <AiOutputDialog
        openDialog={openOutputDialog}
        closeDialog={() => setOpenOutputDialog(false)}
        orgImage={orgImage}
        aiImage={aiOutputImage}
      />
    </div>
  );
}

export default CreateNew;
