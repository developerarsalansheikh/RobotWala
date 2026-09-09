import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        foreground: "#F5F5F5",
        offwhite: "#F5F5F5",
        bodygray: "#A1A1AA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "Sora", "sans-serif"],
        sora: ["var(--font-sora)", "Sora", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["monospace"],
        space: ["var(--font-sora)", "Sora", "sans-serif"],
      },
      letterSpacing: {
        'tight-heading': '-0.025em',
        'tight-hero': '-0.035em',
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "neon-gradient": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #a855f7 100%)",
      },
      backgroundSize: {
        "grid-lg": "140px 140px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "subtle-pulse": "subtle-pulse 8s ease-in-out infinite",
        "slow-spin": "slow-rotate 120s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.12", transform: "scale(1)" },
          "50%": { opacity: "0.22", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
