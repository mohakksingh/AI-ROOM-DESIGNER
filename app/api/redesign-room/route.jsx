import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

export async function POST(request) {
//   const { user } = useUser();
  const { imageUrl, roomType, designType, additionalReq,userEmail } =
    await request.json();

  //Convert Image to Ai Image

  try {
    const input = {
      image: imageUrl,
      prompt:
        "A " +
        roomType +
        " with a " +
        designType +
        "style interior " +
        additionalReq,
    };
    const output = await replicate.run(
      "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
      { input }
    );
    // const output =
    //   "https://replicate.delivery/xezq/tT0F6rD38VY3F5ge2nnUSycQvWmV9kK7sC5Gj5QBWmgges1UA/out.png";

    //Convert output URL to BASE64 Image
    const base64Image = await ConvertImageToBase64(output);

    //Save BASE64 to Firebase
    const fileName = Date.now() + ".png";
    const storageRef = ref(storage, "room-redesign/" + fileName);
    await uploadString(storageRef, base64Image, "data_url");
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);

    //Save All to Database

    const dbResult = await db
      .insert(AiGeneratedImage)
      .values({
        roomType: roomType,
        designType: designType,
        originalImage: imageUrl,
        aiImage: downloadURL,
        userEmail: userEmail
      })
      .returning({
        id: AiGeneratedImage.id,
      });
    return NextResponse.json({
      'result': downloadURL,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      error: e,
    });
  }
}

async function ConvertImageToBase64(imageUrl) {
  const resp = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });
  const base64ImageRaw = Buffer.from(resp.data).toString("base64");

  return "data:image/png;base64," + base64ImageRaw;
}
