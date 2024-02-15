/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn_1: "fadeIn 1s ease-in-out forwards",
        fadeIn_3: "fadeIn 3s ease-in-out forwards",
        fadeIn_5: "fadeIn 5s ease-in-out forwards",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        raleway_dots: ["Raleway Dots", "sans-serif"],
      },
      colors: {
        "almost-black": "#181818", // '#121212' for a slightly darker shade
        "soft-white": "#F8F8F8", // '#121212' for a slightly darker shade
      },
    },
  },
  plugins: [],
};
