import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f1fb",
          100: "#e6e2f7",
          200: "#cdc5ef",
          300: "#a99ce2",
          400: "#7e6bd0",
          500: "#5a45bd",
          600: "#3f2d9e",
          700: "#2e2075",
          800: "#241a5a",
          900: "#1c1448",
        },
        accent: {
          50: "#fff9e6",
          100: "#fff0b8",
          300: "#ffd34a",
          400: "#ffc31a",
          500: "#f5b400",
          600: "#d89800",
        },
        ink: {
          900: "#1c1448",
          800: "#241a5a",
          700: "#2e2075",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(51,102,255,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
