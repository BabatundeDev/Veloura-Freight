/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dce6f5",
          200: "#b8c9e8",
          300: "#8aa3d4",
          400: "#5c7bb8",
          500: "#3d5a96",
          600: "#2d4578",
          700: "#243a63",
          800: "#1a2844",
          900: "#0f1829",
          950: "#0a101c",
        },
        gold: {
          400: "#e8a84a",
          500: "#d4922e",
          600: "#b87a1f",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "truck-drive": "truck-drive 14s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "logo-glide": "logo-glide 2.2s ease-in-out infinite",
      },
      keyframes: {
        "logo-glide": {
          "0%, 100%": { transform: "translateX(0) rotate(-42deg)" },
          "50%": { transform: "translateX(6px) rotate(-42deg)" },
        },
        "truck-drive": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120vw)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
