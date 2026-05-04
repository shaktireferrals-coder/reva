import React, { useRef, useEffect } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5; // slow drift
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 1.5 + 0.5; // 0.5 to 2.0
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges smoothly
    if (this.x <= 0 || this.x >= width) this.vx *= -1;
    if (this.y <= 0 || this.y >= height) this.vy *= -1;
  }
}

const SemiconductorCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const initParticles = () => {
      particles = [];
      // Adjust number of particles based on screen size to maintain performance
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      for (let i = 0; i < Math.min(numParticles, 150); i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Clear canvas completely to let CSS background show through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
      });

      // Draw connections
      const connectDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < connectDistance * connectDistance) {
            const distance = Math.sqrt(distanceSq);
            // Opacity decreases as distance increases
            const opacity = 1 - (distance / connectDistance);
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
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
