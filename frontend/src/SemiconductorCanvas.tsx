import React, { useRef, useEffect } from "react";

const SemiconductorCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fill parent
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Animation loop
    let animationFrameId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw stylized traces and chips
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.strokeStyle = i % 2 === 0 ? "#016064" : "#022D36";
        ctx.lineWidth = 2 + Math.sin(Date.now() / 700 + i) * 1.2;
        ctx.beginPath();
        ctx.moveTo(120 + i * 180, 80);
        ctx.bezierCurveTo(
          200 + i * 180,
          200 + Math.sin(Date.now() / 900 + i) * 60,
          400 + i * 120,
          100 + Math.cos(Date.now() / 1100 + i) * 80,
          canvas.width - 120 - i * 80,
          canvas.height - 80 - i * 40
        );
        ctx.stroke();
        ctx.restore();
      }
      // Draw animated chips
      for (let j = 0; j < 4; j++) {
        ctx.save();
        ctx.fillStyle = j % 2 === 0 ? "#016064" : "#022D36";
        ctx.shadowColor = "#00bfae";
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.rect(
          220 + j * 260 + Math.sin(Date.now() / 800 + j) * 30,
          180 + Math.cos(Date.now() / 900 + j) * 40,
          60,
          30
        );
        ctx.fill();
        ctx.restore();
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
};

export default SemiconductorCanvas;
