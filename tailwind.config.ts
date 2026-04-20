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
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd2ff",
          300: "#8fb4ff",
          400: "#5a8bff",
          500: "#3366ff",
          600: "#1f4cf5",
          700: "#163bd4",
          800: "#1633a8",
          900: "#152f84",
        },
        accent: {
          50: "#f5f0ff",
          100: "#ede0ff",
          300: "#c4a9ff",
          400: "#9d74ff",
          500: "#7c3aed",
          600: "#6d28d9",
        },
        ink: {
          900: "#0b1020",
          800: "#121937",
          700: "#1e2748",
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
