// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         gpt: "#10B981",
//       },
//     },
//   },
// };

// packages/tailwind-preset/src/index.ts

import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xs: "var(--shadow-size-xs) var(--color-shadow-default)",
        sm: "var(--shadow-size-sm) var(--color-shadow-default)",
        md: "var(--shadow-size-md) var(--color-shadow-default)",
        lg: "var(--shadow-size-lg) var(--color-shadow-default)",
      },
      fontSize: {
        // small screen typography
        "s-display-md": "var(--typography-s-display-md-font-size)",
        "s-heading-lg": "var(--typography-s-heading-lg-font-size)",
        "s-heading-md": "var(--typography-s-heading-md-font-size)",
        "s-heading-sm": "var(--typography-s-heading-sm-font-size)",
        "s-body-lg-medium": "var(--typography-s-body-lg-medium-font-size)",
        "s-body-lg-regular": "var(--typography-s-body-lg-regular-font-size)",
        "s-body-md-bold": "var(--typography-s-body-md-bold-font-size)",
        "s-body-md-medium": "var(--typography-s-body-md-medium-font-size)",
        "s-body-md": "var(--typography-s-body-md-font-size)",
        "s-body-sm-bold": "var(--typography-s-body-sm-bold-font-size)",
        "s-body-sm-medium": "var(--typography-s-body-sm-medium-font-size)",
        "s-body-sm": "var(--typography-s-body-sm-font-size)",
        "s-body-xs-medium": "var(--typography-s-body-xs-medium-font-size)",
        "s-body-xs": "var(--typography-s-body-xs-font-size)",
        // large screen typography
        "l-display-md": "var(--typography-l-display-md-font-size)",
        "l-heading-lg": "var(--typography-l-heading-lg-font-size)",
        "l-heading-md": "var(--typography-l-heading-md-font-size)",
        "l-heading-sm": "var(--typography-l-heading-sm-font-size)",
        "l-body-lg-medium": "var(--typography-l-body-lg-medium-font-size)",
        "l-body-lg-regular": "var(--typography-l-body-lg-regular-font-size)",
        "l-body-md-bold": "var(--typography-l-body-md-bold-font-size)",
        "l-body-md-medium": "var(--typography-l-body-md-medium-font-size)",
        "l-body-md": "var(--typography-l-body-md-font-size)",
        "l-body-sm-bold": "var(--typography-l-body-sm-bold-font-size)",
        "l-body-sm-medium": "var(--typography-l-body-sm-medium-font-size)",
        "l-body-sm": "var(--typography-l-body-sm-font-size)",
        "l-body-xs-medium": "var(--typography-l-body-xs-medium-font-size)",
        "l-body-xs": "var(--typography-l-body-xs-font-size)",
      },
      fontFamily: {
        // small screen typography
        "s-display-md": "var(--typography-s-display-md-font-family)",
        "s-heading-lg": "var(--typography-s-heading-lg-font-family)",
        "s-heading-md": "var(--typography-s-heading-md-font-family)",
        "s-heading-sm": "var(--typography-s-heading-sm-font-family)",
        "s-body-lg-medium": "var(--typography-s-body-lg-medium-font-family)",
        "s-body-lg-regular": "var(--typography-s-body-lg-regular-font-family)",
        "s-body-md-bold": "var(--typography-s-body-md-bold-font-family)",
        "s-body-md-medium": "var(--typography-s-body-md-medium-font-family)",
        "s-body-md": "var(--typography-s-body-md-font-family)",
        "s-body-sm-bold": "var(--typography-s-body-sm-bold-font-family)",
        "s-body-sm-medium": "var(--typography-s-body-sm-medium-font-family)",
        "s-body-sm": "var(--typography-s-body-sm-font-family)",
        "s-body-xs-medium": "var(--typography-s-body-xs-medium-font-family)",
        "s-body-xs": "var(--typography-s-body-xs-font-family)",
        // large screen typography
        "l-display-md": "var(--typography-l-display-md-font-family)",
        "l-heading-lg": "var(--typography-l-heading-lg-font-family)",
        "l-heading-md": "var(--typography-l-heading-md-font-family)",
        "l-heading-sm": "var(--typography-l-heading-sm-font-family)",
        "l-body-lg-medium": "var(--typography-l-body-lg-medium-font-family)",
        "l-body-lg-regular": "var(--typography-l-body-lg-regular-font-family)",
        "l-body-md-bold": "var(--typography-l-body-md-bold-font-family)",
        "l-body-md-medium": "var(--typography-l-body-md-medium-font-family)",
        "l-body-md": "var(--typography-l-body-md-font-family)",
        "l-body-sm-bold": "var(--typography-l-body-sm-bold-font-family)",
        "l-body-sm-medium": "var(--typography-l-body-sm-medium-font-family)",
        "l-body-sm": "var(--typography-l-body-sm-font-family)",
        "l-body-xs-medium": "var(--typography-l-body-xs-medium-font-family)",
        "l-body-xs": "var(--typography-l-body-xs-font-family)",
      },
      letterSpacing: {
        // small screen typography
        "s-display-md": "var(--typography-s-display-md-letter-spacing)",
        "s-heading-lg": "var(--typography-s-heading-lg-letter-spacing)",
        "s-heading-md": "var(--typography-s-heading-md-letter-spacing)",
        "s-heading-sm": "var(--typography-s-heading-sm-letter-spacing)",
        "s-body-lg-medium": "var(--typography-s-body-lg-medium-letter-spacing)",
        "s-body-lg-regular":
          "var(--typography-s-body-lg-regular-letter-spacing)",
        "s-body-md-bold": "var(--typography-s-body-md-bold-letter-spacing)",
        "s-body-md-medium": "var(--typography-s-body-md-medium-letter-spacing)",
        "s-body-md": "var(--typography-s-body-md-letter-spacing)",
        "s-body-sm-bold": "var(--typography-s-body-sm-bold-letter-spacing)",
        "s-body-sm-medium": "var(--typography-s-body-sm-medium-letter-spacing)",
        "s-body-sm": "var(--typography-s-body-sm-letter-spacing)",
        "s-body-xs-medium": "var(--typography-s-body-xs-medium-letter-spacing)",
        "s-body-xs": "var(--typography-s-body-xs-letter-spacing)",
        // large screen typography
        "l-display-md": "var(--typography-l-display-md-letter-spacing)",
        "l-heading-lg": "var(--typography-l-heading-lg-letter-spacing)",
        "l-heading-md": "var(--typography-l-heading-md-letter-spacing)",
        "l-heading-sm": "var(--typography-l-heading-sm-letter-spacing)",
        "l-body-lg-medium": "var(--typography-l-body-lg-medium-letter-spacing)",
        "l-body-lg-regular":
          "var(--typography-l-body-lg-regular-letter-spacing)",
        "l-body-md-bold": "var(--typography-l-body-md-bold-letter-spacing)",
        "l-body-md-medium": "var(--typography-l-body-md-medium-letter-spacing)",
        "l-body-md": "var(--typography-l-body-md-letter-spacing)",
        "l-body-sm-bold": "var(--typography-l-body-sm-bold-letter-spacing)",
        "l-body-sm-medium": "var(--typography-l-body-sm-medium-letter-spacing)",
        "l-body-sm": "var(--typography-l-body-sm-letter-spacing)",
        "l-body-xs-medium": "var(--typography-l-body-xs-medium-letter-spacing)",
        "l-body-xs": "var(--typography-l-body-xs-letter-spacing)",
      },
      fontWeight: {
        // small screen typography
        "s-display-md": "var(--typography-s-display-md-font-weight)",
        "s-heading-lg": "var(--typography-s-heading-lg-font-weight)",
        "s-heading-md": "var(--typography-s-heading-md-font-weight)",
        "s-heading-sm": "var(--typography-s-heading-sm-font-weight)",
        "s-body-lg-medium": "var(--typography-s-body-lg-medium-font-weight)",
        "s-body-lg-regular": "var(--typography-s-body-lg-regular-font-weight)",
        "s-body-md-bold": "var(--typography-s-body-md-bold-font-weight)",
        "s-body-md-medium": "var(--typography-s-body-md-medium-font-weight)",
        "s-body-md": "var(--typography-s-body-md-font-weight)",
        "s-body-sm-bold": "var(--typography-s-body-sm-bold-font-weight)",
        "s-body-sm-medium": "var(--typography-s-body-sm-medium-font-weight)",
        "s-body-sm": "var(--typography-s-body-sm-font-weight)",
        "s-body-xs-medium": "var(--typography-s-body-xs-medium-font-weight)",
        "s-body-xs": "var(--typography-s-body-xs-font-weight)",
        // large screen typography
        "l-display-md": "var(--typography-l-display-md-font-weight)",
        "l-heading-lg": "var(--typography-l-heading-lg-font-weight)",
        "l-heading-md": "var(--typography-l-heading-md-font-weight)",
        "l-heading-sm": "var(--typography-l-heading-sm-font-weight)",
        "l-body-lg-medium": "var(--typography-l-body-lg-medium-font-weight)",
        "l-body-lg-regular": "var(--typography-l-body-lg-regular-font-weight)",
        "l-body-md-bold": "var(--typography-l-body-md-bold-font-weight)",
        "l-body-md-medium": "var(--typography-l-body-md-medium-font-weight)",
        "l-body-md": "var(--typography-l-body-md-font-weight)",
        "l-body-sm-bold": "var(--typography-l-body-sm-bold-font-weight)",
        "l-body-sm-medium": "var(--typography-l-body-sm-medium-font-weight)",
        "l-body-sm": "var(--typography-l-body-sm-font-weight)",
        "l-body-xs-medium": "var(--typography-l-body-xs-medium-font-weight)",
        "l-body-xs": "var(--typography-l-body-xs-font-weight)",
      },
      lineHeight: {
        // small screen typography
        "s-display-md": "var(--typography-s-display-md-line-height)",
        "s-heading-lg": "var(--typography-s-heading-lg-line-height)",
        "s-heading-md": "var(--typography-s-heading-md-line-height)",
        "s-heading-sm": "var(--typography-s-heading-sm-line-height)",
        "s-body-lg-medium": "var(--typography-s-body-lg-medium-line-height)",
        "s-body-lg-regular": "var(--typography-s-body-lg-regular-line-height)",
        "s-body-md-bold": "var(--typography-s-body-md-bold-line-height)",
        "s-body-md-medium": "var(--typography-s-body-md-medium-line-height)",
        "s-body-md": "var(--typography-s-body-md-line-height)",
        "s-body-sm-bold": "var(--typography-s-body-sm-bold-line-height)",
        "s-body-sm-medium": "var(--typography-s-body-sm-medium-line-height)",
        "s-body-sm": "var(--typography-s-body-sm-line-height)",
        "s-body-xs-medium": "var(--typography-s-body-xs-medium-line-height)",
        "s-body-xs": "var(--typography-s-body-xs-line-height)",
        // large screen typography
      },
      colors: {
        gpt: "#10B981",
        icon: {
          default: "var(--color-icon-default)",
          alternative: "var(--color-icon-alternative)",
          muted: "var(--color-icon-muted)",
        },
        overlay: {
          default: "var(--color-overlay-default)",
          alternative: "var(--color-overlay-alternative)",
          inverse: "var(--color-overlay-inverse)",
        },
        shadow: {
          default: "var(--color-shadow-default)",
          primary: "var(--color-shadow-primary)",
          error: "var(--color-shadow-error)",
        },
        primary: {
          default: "var(--color-primary-default)",
          alternative: "var(--color-primary-alternative)",
          muted: "var(--color-primary-muted)",
          inverse: "var(--color-primary-inverse)",
        },
        error: {
          default: "var(--color-error-default)",
          alternative: "var(--color-error-alternative)",
          muted: "var(--color-error-muted)",
          inverse: "var(--color-error-inverse)",
        },
        warning: {
          default: "var(--color-warning-default)",
          muted: "var(--color-warning-muted)",
          inverse: "var(--color-warning-inverse)",
        },
        success: {
          default: "var(--color-success-default)",
          muted: "var(--color-success-muted)",
          inverse: "var(--color-success-inverse)",
        },
        info: {
          default: "var(--color-info-default)",
          muted: "var(--color-info-muted)",
          inverse: "var(--color-info-inverse)",
        },
        backgroundColor: {
          default: "var(--color-background-default)",
          hover: "var(--color-background-default-hover)",
          pressed: "var(--color-background-default-pressed)",
          alternative: "var(--color-background-alternative)",
          "alternative-hover": "var(--color-background-alternative-hover)",
          "alternative-pressed": "var(--color-background-alternative-pressed)",
        },
        textColor: {
          default: "var(--color-text-default)",
          alternative: "var(--color-text-alternative)",
          muted: "var(--color-text-muted)",
        },
        borderColor: {
          default: "var(--color-border-default)",
          muted: "var(--color-border-muted)",
        },
      },
    },
  },
  plugins: [],
};

// Seems we eed both exports for tailwind presets to work correctly?
// presets: [require('@metamask/tailwind-preset')],

export default tailwindConfig;

module.exports = tailwindConfig;

