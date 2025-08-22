import React from "react";
import "./BubbleBackground.css";

const BubbleBackground = () => {
  return (
    <div className="bubble-background">
      {Array.from({ length: 12 }).map((_, i) => (   //  fewer bubbles (12 instead of 30)
        <span
          key={i}
          className="bubble"
          style={{
            "--size": `${Math.random() * 50 + 30}px`, // 30px - 80px (slightly bigger)
            "--left": `${Math.random() * 100}%`,
            "--duration": `${Math.random() * 25 + 20}s`, //  slower: 20s - 45s
            "--delay": `${Math.random() * -30}s`,       // spread out start times
          }}
        ></span>
      ))}
    </div>
  );
};

export default BubbleBackground;
