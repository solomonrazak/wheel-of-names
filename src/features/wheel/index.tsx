// import React, { useState, useRef, useEffect } from "react";
// import confetti from "canvas-confetti";
// import { capitalize } from "../../utils/capitalize";


// const Wheel = () => {
//   const [spinning, setSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [spinDirection, setSpinDirection] = useState<
//     'clockwise' | 'counterclockwise'
//   >('clockwise');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupWinner, setPopupWinner] = useState<string | null>(null);

//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
//   // // State to track if the user is currently drawing
//   // const [isDrawing, setIsDrawing] = useState(false);

//   // // Refs to store the canvas element and its 2D drawing context
//   // const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   // const contextRef = useRef<CanvasRenderingContext2D | null>(null);

//   // // Setup the canvas and context on the initial render
//   // useEffect(() => {
//   //   const canvas = canvasRef.current;

//   //   if (!canvas) {
//   //     console.error("Canvas reference is null.");
//   //     return;
//   //   }

//   //   // Set canvas dimensions for high-resolution displays
//   //   canvas.width = window.innerWidth * 2;
//   //   canvas.height = window.innerHeight * 2;
//   //   canvas.style.width = `${window.innerWidth}px`;
//   //   canvas.style.height = `${window.innerHeight}px`;

//   //   // Get the 2D context to draw on the canvas
//   //   const context = canvas.getContext("2d");

//   //   if (!context) {
//   //     console.error("Failed to get 2D context.");
//   //     return;
//   //   }

//   //   // Set up drawing styles and scale for crisp lines
//   //   context.scale(2, 2);
//   //   context.lineCap = "round"; // Round edges for smoother lines
//   //   context.lineWidth = 5; // Line thickness
//   //   context.strokeStyle = "black"; // Default stroke color
//   //   contextRef.current = context;
//   // }, []);

//   // // Start drawing when the mouse is pressed down
//   // const startDrawing = ({
//   //   nativeEvent,
//   // }: React.MouseEvent<HTMLCanvasElement>) => {
//   //   const { offsetX, offsetY } = nativeEvent;

//   //   if (!contextRef.current) {
//   //     console.error("Context reference is null.");
//   //     return;
//   //   }

//   //   contextRef.current.beginPath(); // Start a new drawing path
//   //   contextRef.current.moveTo(offsetX, offsetY); // Move to the starting position
//   //   setIsDrawing(true); // Set drawing state to true
//   // };

//   // // Stop drawing when the mouse is released
//   // const finishDrawing = () => {
//   //   if (!contextRef.current) {
//   //     console.error("Context reference is null.");
//   //     return;
//   //   }

//   //   contextRef.current.closePath(); // Close the current path
//   //   setIsDrawing(false); // Set drawing state to false
//   // };

//   // // Draw on the canvas while the mouse is moving
//   // const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
//   //   if (!isDrawing || !contextRef.current) {
//   //     return;
//   //   }

//   //   const { offsetX, offsetY } = nativeEvent;
//   //   contextRef.current.lineTo(offsetX, offsetY); // Draw a line to the new position
//   //   contextRef.current.stroke(); // Apply the stroke (make the line visible)
//   // };
//   useEffect(() => {
//     if (canvasRef.current) {
//       drawWheel();
//     }
//   }, [participants, rotation]);

//   const darkenColor = (color: string, amount: number): string => {
//     let r = parseInt(color.slice(1, 3), 16);
//     let g = parseInt(color.slice(3, 5), 16);
//     let b = parseInt(color.slice(5, 7), 16);

//     r = Math.max(0, r - amount);
//     g = Math.max(0, g - amount);
//     b = Math.max(0, b - amount);

//     return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
//   };

//   const drawWheel = () => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext('2d')!;
//     const radius = canvas.width / 2;
//     const sliceAngle = (2 * Math.PI) / numSectors;

//     // Clear previous drawing
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.translate(radius, radius);
//     ctx.rotate(-rotation * (Math.PI / 180));

//     // Draw sectors
//     for (let i = 0; i < numSectors; i++) {
//       const startAngle = i * sliceAngle;
//       const endAngle = (i + 1) * sliceAngle;
//       ctx.beginPath();
//       ctx.moveTo(0, 0);
//       ctx.arc(0, 0, radius, startAngle, endAngle);
//       ctx.closePath();
//       const color = darkenColor(colors[i % colors.length], 30);
//       ctx.fillStyle = color;
//       ctx.fill();

//       // Draw the name in the sector
//       ctx.save();
//       ctx.rotate((startAngle + endAngle) / 2);
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       ctx.fillStyle = 'white';
//       ctx.font = '16px Arial';
//       ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
//       ctx.shadowOffsetX = 1;
//       ctx.shadowOffsetY = 1;
//       ctx.shadowBlur = 3;
//       ctx.fillText(capitalize(participants[i]) || '', radius * 0.5, 0);
//       ctx.restore();
//     }

//     ctx.rotate(rotation * (Math.PI / 180)); // Reset rotation
//     ctx.translate(-radius, -radius);

//     // Draw the static indicator
//     const indicatorLength = 20;
//     const indicatorWidth = 10;
//     ctx.save();
//     ctx.translate(canvas.width, canvas.height / 2);
//     ctx.beginPath();
//     ctx.moveTo(-indicatorLength, -indicatorWidth / 2);
//     ctx.lineTo(0, -indicatorWidth / 2);
//     ctx.lineTo(0, indicatorWidth / 2);
//     ctx.lineTo(-indicatorLength, indicatorWidth / 2);
//     ctx.closePath();
//     ctx.fillStyle = 'red';
//     ctx.fill();
//     ctx.restore();
//   };

//   const startSpin = () => {
//     if (spinning) return;
//     setSpinning(true);

//     // Set the number of full rotations and calculate final rotation
//     const numFullRotations = Math.random() * 5 + 5; // Between 5 and 10 full rotations
//     const totalRotation = numFullRotations * 360;
//     const finalRotation =
//       (rotation +
//         (spinDirection === 'clockwise' ? -totalRotation : totalRotation)) %
//       360;

//     const spinDuration = 6000;
//     const easing = (t: number) => {
//       // Ease-out cubic
//       return 1 - Math.pow(1 - t, 3);
//     };

//     let startTime: number;

//     const animate = (time: number) => {
//       if (!startTime) startTime = time;
//       const elapsed = time - startTime;
//       const t = Math.min(elapsed / spinDuration, 1);
//       const easeT = easing(t);
//       const currentRotation =
//         rotation +
//         (spinDirection === 'clockwise' ? -totalRotation : totalRotation) *
//           easeT;

//       setRotation(currentRotation);

//       if (elapsed < spinDuration) {
//         requestAnimationFrame(animate);
//       } else {
//         setSpinning(false);
//         determineWinner(finalRotation);
//       }
//     };

//     requestAnimationFrame(animate);
//   };

//   const determineWinner = (finalRotation: number) => {
//     const sliceAngle = 360 / numSectors;
//     const normalizedRotation = ((finalRotation % 360) + 360) % 360;
//     const winningSector = Math.floor(normalizedRotation / sliceAngle);

//     setPopupWinner(participants[winningSector]);
//     setShowPopup(true);
//   };

//   const changeSpinDirection = () => {
//     setSpinDirection(
//       spinDirection === 'clockwise' ? 'counterclockwise' : 'clockwise',
//     );
//   };

//   useEffect(() => {
//     if (showPopup) {
//       startConfetti();
//       const timer = setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
//       return () => clearTimeout(timer);
//     }
//   }, [showPopup]);

//   const startConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//     });
//   };

//   return (
//     <div className="w-full h-full">
//       {/* Render the canvas and attach event handlers */}
//       <canvas
//       width={400}
//       height={400}
//         ref={canvasRef}
      
//         // onMouseDown={startDrawing} // Start drawing
//         // onMouseUp={finishDrawing} // Stop drawing
//         // onMouseMove={draw} // Draw while moving
//         // onMouseLeave={finishDrawing} // Stop drawing if mouse leaves the canvas
//         style={{
//           border: "1px solid white", // Optional border for better visibility
//           display: "block", // Remove default inline styling
//           margin: "0 auto", // Center canvas in the container
//         }}
//       />
//        <button
//           onClick={changeSpinDirection}
//           disabled={participants.length === 0 || spinning}
//         >
//           {capitalize(spinDirection)}
//         </button>
//         <button
//           onClick={startSpin}
//           disabled={participants.length === 0 || spinning}
//         >
//           Spin
//         </button>
//         {showPopup && popupWinner && (
//           <>
      
//           <h2>Congratulations!</h2>
//           <h3>{capitalize(popupWinner)}</h3>
//           </>
        
//       )}
//     </div>
//   );
// };

// export default Wheel;

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { capitalize } from "../../utils/capitalize";

interface WheelProps {
  participants: string[];
  colors: string[];
}

const Wheel: React.FC<WheelProps> = ({ participants, colors }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [spinDirection, setSpinDirection] = useState<
    "clockwise" | "counterclockwise"
  >("clockwise");
  const [showPopup, setShowPopup] = useState(false);
  const [popupWinner, setPopupWinner] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const numSectors = participants.length;

  useEffect(() => {
    if (canvasRef.current) {
      drawWheel();
    }
  }, [participants, rotation]);

  const darkenColor = (color: string, amount: number): string => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const drawWheel = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const radius = canvas.width / 2;
    const sliceAngle = (2 * Math.PI) / numSectors;

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(-rotation * (Math.PI / 180));

    // Draw wheel sectors
    for (let i = 0; i < numSectors; i++) {
      const startAngle = i * sliceAngle;
      const endAngle = (i + 1) * sliceAngle;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();

      const color = darkenColor(colors[i % colors.length], 30);
      ctx.fillStyle = color;
      ctx.fill();

      // Add text labels for each sector
      ctx.save();
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.translate(radius * 0.6, 0);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = "white";
      ctx.font = "14px Arial";
      ctx.fillText(capitalize(participants[i] || ""), 0, 0);
      ctx.restore();
    }

    ctx.restore();

    // Draw static indicator
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 10, 0);
    ctx.lineTo(canvas.width / 2 + 10, 0);
    ctx.lineTo(canvas.width / 2, 20);
    ctx.closePath();
    ctx.fill();
  };

  const startSpin = () => {
    if (spinning) return;
    setSpinning(true);

    const numFullRotations = Math.random() * 5 + 5; // Between 5 and 10 full rotations
    const totalRotation = numFullRotations * 360;
    const finalRotation =
      (rotation + (spinDirection === "clockwise" ? -totalRotation : totalRotation)) % 360;

    const spinDuration = 6000;
    const easing = (t: number) => 1 - Math.pow(1 - t, 3);

    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const t = Math.min(elapsed / spinDuration, 1);
      const easeT = easing(t);
      const currentRotation =
        rotation +
        (spinDirection === "clockwise" ? -totalRotation : totalRotation) * easeT;

      setRotation(currentRotation);

      if (elapsed < spinDuration) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        determineWinner(finalRotation);
      }
    };

    requestAnimationFrame(animate);
  };

  const determineWinner = (finalRotation: number) => {
    const sliceAngle = 360 / numSectors;
    const normalizedRotation = ((finalRotation % 360) + 360) % 360;
    const winningSector = Math.floor(normalizedRotation / sliceAngle);
    setPopupWinner(participants[winningSector]);
    setShowPopup(true);
  };

  const changeSpinDirection = () => {
    setSpinDirection(
      spinDirection === "clockwise" ? "counterclockwise" : "clockwise"
    );
  };

  useEffect(() => {
    if (showPopup) {
      startConfetti();
      const timer = setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const startConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="w-full h-full">
      <canvas
        width={400}
        height={400}
        ref={canvasRef}
        style={{ border: "1px solid white", display: "block", margin: "0 auto" }}
      />
      <button onClick={changeSpinDirection} disabled={spinning}>
        Change Direction to {capitalize(spinDirection === "clockwise" ? "counterclockwise" : "clockwise")}
      </button>
      <button onClick={startSpin} disabled={spinning || participants.length === 0}>
        Spin
      </button>
      {showPopup && popupWinner && (
        <div>
          <h2>Congratulations!</h2>
          <h3>{capitalize(popupWinner)}</h3>
        </div>
      )}
    </div>
  );
};

export default Wheel;
