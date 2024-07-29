import type { Config } from 'tailwindcss';
import * as dotenv from 'dotenv';
dotenv.config();

const dsTailwindTheme = process.env.LOCAL_ENV === 'true' ? require('../index.js') : require('ds-tailwind-theme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [dsTailwindTheme],
};

export default config;
