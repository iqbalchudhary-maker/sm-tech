import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slateDeep: "#020617",
        neonBlue: "#38bdf8",
        electricViolet: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.2)",
        violet: "0 0 30px rgba(139, 92, 246, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
