/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
