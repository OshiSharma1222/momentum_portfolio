"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useId, useRef, useState } from "react";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore: React.FC<SparklesProps> = (props) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    speed = 1,
    particleColor = "#FFF",
    particleDensity = 100,
  } = props;

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const generatedId = useId();
  const effectId = id || generatedId;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateDimensions = () => {
      if (canvas.parentElement) {
        setDimensions({
          width: canvas.parentElement.offsetWidth,
          height: canvas.parentElement.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particles: Particle[] = [];
    const particleCount = Math.floor((dimensions.width * dimensions.height) / 10000) * particleDensity;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * dimensions.width;
        this.y = Math.random() * dimensions.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.opacity = Math.random();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > dimensions.width) this.x = 0;
        if (this.x < 0) this.x = dimensions.width;
        if (this.y > dimensions.height) this.y = 0;
        if (this.y < 0) this.y = dimensions.height;

        this.opacity += (Math.random() - 0.5) * 0.05;
        this.opacity = Math.max(0, Math.min(1, this.opacity));
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }
  }, [dimensions, maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={effectId}
      className={cn("pointer-events-none", className)}
      style={{
        background,
      }}
    ></canvas>
  );
};
