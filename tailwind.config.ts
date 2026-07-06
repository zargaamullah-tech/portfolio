import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette from the portfolio blueprint
        navy: "#1B3A6B",
        steel: "#0E76A8",
        sky: "#D6E8F7",
        ink: "#0B1220",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(2, 8, 23, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
