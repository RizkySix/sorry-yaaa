import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinky: "#FFC0CB",
        rose: "#FF6B8A",
        lavender: "#E8D5F5",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
