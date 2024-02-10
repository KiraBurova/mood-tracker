import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

/*eslint-env node*/
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
