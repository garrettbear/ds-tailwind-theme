/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("../index.js")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // Other Tailwind configurations
};
