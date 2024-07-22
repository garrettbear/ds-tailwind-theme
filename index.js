const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      // Add more base styles or components as needed
    });
  },
  {
    theme: {
      extend: {
        colors: {
          primary: "#bada55",
          secondary: "#9333EA",
          // Add your custom design tokens here
        },
        spacing: {
          72: "18rem",
          84: "21rem",
          96: "24rem",
          // Add more custom spacing values
        },
      },
    },
  }
);
