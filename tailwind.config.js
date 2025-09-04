/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ["Kalnia", "serif"],
      },
      fontFamily: {
        dancing: ['"Dancing Script"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
