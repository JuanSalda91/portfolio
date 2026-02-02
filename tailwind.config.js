/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        secondary: "#8B5CF6", // Purple
        accent: "#10B981", // Green
        dark: "#1F2937", // Dark gray
        light: "#F9FAFB", // Off-white
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
