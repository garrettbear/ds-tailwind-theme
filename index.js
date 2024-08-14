const plugin = require("tailwindcss/plugin");
const {
  brandColor,
  lightTheme,
  darkTheme,
} = require("@metamask/design-tokens");
const designTokens = require("@metamask/design-tokens/styles.css");

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
      ...designTokens,
    });
  },
  {
    theme: {
      colors: {
        white: brandColor.white,
        black: brandColor.black,
        red: {
          25: brandColor.red025,
          50: brandColor.red050,
          100: brandColor.red100,
          200: brandColor.red200,
          300: brandColor.red300,
          400: brandColor.red400,
          500: brandColor.red500,
          600: brandColor.red600,
          700: brandColor.red700,
          800: brandColor.red800,
          900: brandColor.red900,
        },
        orange: {
          25: brandColor.orange025,
          50: brandColor.orange050,
          100: brandColor.orange100,
          200: brandColor.orange200,
          300: brandColor.orange300,
          400: brandColor.orange400,
          500: brandColor.orange500,
          600: brandColor.orange600,
          700: brandColor.orange700,
          800: brandColor.orange800,
          900: brandColor.orange900,
        },
        blue: {
          25: brandColor.blue025,
          50: brandColor.blue050,
          100: brandColor.blue100,
          200: brandColor.blue200,
          300: brandColor.blue300,
          400: brandColor.blue400,
          500: brandColor.blue500,
          600: brandColor.blue600,
          700: brandColor.blue700,
          800: brandColor.blue800,
          900: brandColor.blue900,
        },
        green: {
          25: brandColor.green025,
          50: brandColor.green050,
          100: brandColor.green100,
          200: brandColor.green200,
          300: brandColor.green300,
          400: brandColor.green400,
          500: brandColor.green500,
          600: brandColor.green600,
          700: brandColor.green700,
          800: brandColor.green800,
          900: brandColor.green900,
        },
        lime: {
          25: brandColor.lime025,
          50: brandColor.lime050,
          100: brandColor.lime100,
          200: brandColor.lime200,
          300: brandColor.lime300,
          400: brandColor.lime400,
          500: brandColor.lime500,
          600: brandColor.lime600,
          700: brandColor.lime700,
          800: brandColor.lime800,
          900: brandColor.lime900,
        },
        purple: {
          25: brandColor.purple025,
          50: brandColor.purple050,
          100: brandColor.purple100,
          200: brandColor.purple200,
          300: brandColor.purple300,
          400: brandColor.purple400,
          500: brandColor.purple500,
          600: brandColor.purple600,
          700: brandColor.purple700,
          800: brandColor.purple800,
          900: brandColor.purple900,
        },
        gray: {
          25: brandColor.grey025,
          50: brandColor.grey050,
          100: brandColor.grey100,
          200: brandColor.grey200,
          300: brandColor.grey300,
          400: brandColor.grey400,
          500: brandColor.grey500,
          600: brandColor.grey600,
          700: brandColor.grey700,
          800: brandColor.grey800,
          900: brandColor.grey900,
          1000: brandColor.grey1000,
        },
      },
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
