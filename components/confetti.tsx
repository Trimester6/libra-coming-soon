"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export function Confetti() {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function confettiEffect(x: number, y: number) {
      confetti({
        particleCount: 3,
        startVelocity: 55,
        spread: 50,
        origin: { x, y },
        gravity: 1.2,
        ticks: 400,
        shapes: ["square", "circle"],
        scalar: randomInRange(0.4, 1),
      });
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      // Left corner
      confettiEffect(0.1, 0.9);
      // Right corner
      confettiEffect(0.9, 0.9);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything visible
}
