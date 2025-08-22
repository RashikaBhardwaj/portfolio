import React, { useEffect } from "react";
import "./BubbleBackground.css";

const BubbleBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".bubble-container");

    const colors = [
      "rgba(255, 99, 132, 0.6)",   // Pink
      "rgba(54, 162, 235, 0.6)",   // Blue
      "rgba(255, 206, 86, 0.6)",   // Yellow
      "rgba(75, 192, 192, 0.6)",   // Teal
      "rgba(153, 102, 255, 0.6)",  // Purple
      "rgba(255, 159, 64, 0.6)",   // Orange
    ];

    // Create a bubble
    const createBubble = (x, y, size = null) => {
      const bubble = document.createElement("span");
      const randomSize = size || Math.random() * 20 + 10; // random 10px - 30px
      bubble.style.width = `${randomSize}px`;
      bubble.style.height = `${randomSize}px`;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      bubble.classList.add("bubble");
      container.appendChild(bubble);

      // Remove bubble after animation ends
      setTimeout(() => {
        bubble.remove();
      }, 3000);
    };

    // Mouse move → spawn small bubbles
    const handleMouseMove = (e) => {
      createBubble(e.clientX, e.clientY, Math.random() * 10 + 5);
    };

    // Click → spawn burst of bubbles
    const handleClick = (e) => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createBubble(
            e.clientX + (Math.random() * 50 - 25), // random spread
            e.clientY + (Math.random() * 50 - 25),
            Math.random() * 25 + 10
          );
        }, i * 50);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <div className="bubble-container"></div>;
};

export default BubbleBackground;
