import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css"; // Import the CSS for the slider
import AiOutputDialog from "./AiOutputDialog";

function RoomDesignCard({ room }) {
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const onClickHandler = () => {
    setOpenOutputDialog(true);
  };

  return (
    <div>
      <div
        className="shadow-md rounded-md cursor-pointer"
        onClick={onClickHandler}
      >
        <ReactBeforeSliderComponent
          firstImage={{
            imageUrl: room?.aiImage,
          }}
          secondImage={{
            imageUrl: room?.originalImage,
          }}
        />
        <div className="p-4 ">
          <h2>🏡 Room Type : {room.roomType}</h2>
          <h2>🎨 Design Type : {room.designType}</h2>
        </div>
      </div>

      <AiOutputDialog
        aiImage={room.aiImage}
        orgImage={room.originalImage}
        openDialog={openOutputDialog}
        closeDialog={() => setOpenOutputDialog(false)}
      />
    </div>
  );
}

export default RoomDesignCard;
