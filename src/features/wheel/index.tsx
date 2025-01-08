import React, { useState, useRef } from "react";

const Wheel = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [spinDirection, setSpinDirection] = useState<
    "clockwise" | "counterclockwise"
  >("clockwise");
  const [showPopup, setShowPopup] = useState(false);
  const [popupWinner, setPopupWinner] = useState<string | null>(null)


  const startDrawing = () => {

  }

  const finishDrawing = () => {

  }

  const draw = () => {

  }


  return (
    <div>
      <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      
      />
    </div>
  );
};

export default Wheel;
