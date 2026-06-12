"use client";

import { useMemo } from "react";

const EMOJIS = ["❤️", "💕", "🩷", "💖", "💗"];

export default function HeartRain({ count = 18 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        size: 1.5 + Math.random() * 1.5,
      })),
    [count]
  );

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}rem`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </>
  );
}
