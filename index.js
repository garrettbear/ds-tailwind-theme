const plugin = require("tailwindcss/plugin");
const {
  brandColor,
  lightTheme,
  darkTheme,
} = require("@metamask/design-tokens");

import { darkThemeColors, foxThemeColors, lightThemeColors } from "./theme";

module.exports = plugin(
  function ({ addBase, addComponents, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      // Add more base styles or components as needed
    });
    // Inject custom CSS variables
    addBase({
      ":root": {
        ...lightThemeColors,
      },
      '[data-theme="dark"]': {
        ...darkThemeColors,
      },
      '[data-theme="fox"]': {
        ...foxThemeColors,
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          primary: darkTheme.colors.primary.alternative,
          tester: "#bada55",
          fun: "var(--color-fun)",
          sweet: "var(--color-primary-alternative)",
          "primary-default": "var(--color-primary-default)",
          secondary: {
            light: "#bada55", // Light theme color
            dark: "#c9c9c9", // Dark theme color
          },
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
