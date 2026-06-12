"use client";

import { useEffect, useState } from "react";
import EscapeButton from "@/components/EscapeButton";
import HeartRain from "@/components/HeartRain";
import CapybaraMullet from "@/components/CapybaraMullet";

const APOLOGY_MESSAGE =
  "Plis maafin aku... kemarin aku ga sopan ke kamu, dan kayaknya kamu muak sama aku, tapi plis jangan tiba-tiba dingin. Maafin yaaa?";

export default function Home() {
  const [forgiven, setForgiven] = useState(false);

  useEffect(() => {
    if (!forgiven) return;
    fetch("/api/notify", { method: "POST" }).catch(() => {});
  }, [forgiven]);

  if (forgiven) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center">
        <HeartRain count={18} />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-md">
          <CapybaraMullet className="w-64 h-64 sm:w-80 sm:h-80 wiggle" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-rose drop-shadow-sm">
            Makasih Kezia 🥹💕
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-pink-700">
            Semogaa khe mau ku ajak keluar lagi
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center border-4 border-pinky">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-rose mb-6">
          Keziaaa 🥺
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
          {APOLOGY_MESSAGE}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={() => setForgiven(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-rose text-white font-extrabold text-lg shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Ya 💖
          </button>
          <EscapeButton />
        </div>
      </div>
    </main>
  );
}
