/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom-directory>/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset"), require("../preset.ts")],
  theme: {
    extend: {},
  },
  // plugins: [require("../index.js")],
};
