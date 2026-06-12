"use client";

import { useState, useCallback } from "react";

export default function EscapeButton() {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const escape = useCallback(() => {
    if (typeof window === "undefined") return;
    const btnW = 140;
    const btnH = 56;
    const maxX = Math.max(0, window.innerWidth - btnW - 16);
    const maxY = Math.max(0, window.innerHeight - btnH - 16);
    const left = Math.floor(Math.random() * maxX) + 8;
    const top = Math.floor(Math.random() * maxY) + 8;
    setPos({ top, left });
  }, []);

  const style: React.CSSProperties = pos
    ? { position: "fixed", top: pos.top, left: pos.left, zIndex: 40 }
    : {};

  return (
    <button
      onMouseEnter={escape}
      onTouchStart={escape}
      onClick={escape}
      style={style}
      className={`px-6 py-3 rounded-full bg-white border-2 border-rose text-rose font-bold shadow-md transition-transform ${
        pos ? "" : "relative"
      }`}
      aria-label="Tidak"
    >
      Tidak 😤
    </button>
  );
}
