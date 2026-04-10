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
        slateDeep: "#f8fafc",
        neonBlue: "#0ea5e9",
        electricViolet: "#8b5cf6",
        brandPrimary: "#2563eb",
        brandSecondary: "#4f46e5",
        textMain: "#0f172a",
        textMuted: "#475569",
        borderLight: "#e2e8f0"
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 165, 233, 0.1)",
        violet: "0 0 30px rgba(139, 92, 246, 0.1)",
        premium: "0 10px 40px -10px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
