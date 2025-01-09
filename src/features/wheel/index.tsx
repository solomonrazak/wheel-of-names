import React, { useState, useRef, useEffect } from "react";

const Wheel = () => {
  // // State to track if the user is currently drawing
  // const [isDrawing, setIsDrawing] = useState(false);

  // // Refs to store the canvas element and its 2D drawing context
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  // // Setup the canvas and context on the initial render
  // useEffect(() => {
  //   const canvas = canvasRef.current;

  //   if (!canvas) {
  //     console.error("Canvas reference is null.");
  //     return;
  //   }

  //   // Set canvas dimensions for high-resolution displays
  //   canvas.width = window.innerWidth * 2;
  //   canvas.height = window.innerHeight * 2;
  //   canvas.style.width = `${window.innerWidth}px`;
  //   canvas.style.height = `${window.innerHeight}px`;

  //   // Get the 2D context to draw on the canvas
  //   const context = canvas.getContext("2d");

  //   if (!context) {
  //     console.error("Failed to get 2D context.");
  //     return;
  //   }

  //   // Set up drawing styles and scale for crisp lines
  //   context.scale(2, 2);
  //   context.lineCap = "round"; // Round edges for smoother lines
  //   context.lineWidth = 5; // Line thickness
  //   context.strokeStyle = "black"; // Default stroke color
  //   contextRef.current = context;
  // }, []);

  // // Start drawing when the mouse is pressed down
  // const startDrawing = ({
  //   nativeEvent,
  // }: React.MouseEvent<HTMLCanvasElement>) => {
  //   const { offsetX, offsetY } = nativeEvent;

  //   if (!contextRef.current) {
  //     console.error("Context reference is null.");
  //     return;
  //   }

  //   contextRef.current.beginPath(); // Start a new drawing path
  //   contextRef.current.moveTo(offsetX, offsetY); // Move to the starting position
  //   setIsDrawing(true); // Set drawing state to true
  // };

  // // Stop drawing when the mouse is released
  // const finishDrawing = () => {
  //   if (!contextRef.current) {
  //     console.error("Context reference is null.");
  //     return;
  //   }

  //   contextRef.current.closePath(); // Close the current path
  //   setIsDrawing(false); // Set drawing state to false
  // };

  // // Draw on the canvas while the mouse is moving
  // const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
  //   if (!isDrawing || !contextRef.current) {
  //     return;
  //   }

  //   const { offsetX, offsetY } = nativeEvent;
  //   contextRef.current.lineTo(offsetX, offsetY); // Draw a line to the new position
  //   contextRef.current.stroke(); // Apply the stroke (make the line visible)
  // };

  return (
    <div className="w-full h-full">
      {/* Render the canvas and attach event handlers */}
      <canvas
      width={400}
      height={400}
        ref={canvasRef}
      
        // onMouseDown={startDrawing} // Start drawing
        // onMouseUp={finishDrawing} // Stop drawing
        // onMouseMove={draw} // Draw while moving
        // onMouseLeave={finishDrawing} // Stop drawing if mouse leaves the canvas
        style={{
          border: "1px solid white", // Optional border for better visibility
          display: "block", // Remove default inline styling
          margin: "0 auto", // Center canvas in the container
        }}
      />
    </div>
  );
};

export default Wheel;
