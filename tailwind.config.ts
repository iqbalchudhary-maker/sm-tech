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
        slateDeep: "#ffffff",
        neonBlue: "#4f46e5",
        electricViolet: "#7c3aed",
        brandPrimary: "#4f46e5",
        brandSecondary: "#7c3aed",
        brandSuccess: "#10b981",
        brandRose: "#f43f5e",
        textMain: "#0f172a",
        textMuted: "#475569",
        borderLight: "#e2e8f0",
        surfaceSub: "#f8fafc"
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 70, 229, 0.08)",
        violet: "0 0 40px rgba(124, 58, 237, 0.08)",
        premium: "0 10px 50px -12px rgba(0, 0, 0, 0.08)",
        floating: "0 20px 60px -15px rgba(79, 70, 229, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
