const {
  guessProductionMode
} = require("@ngneat/tailwind");

const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = ['IRANSans', ...defaultTheme.fontFamily.sans];

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': fontFamily,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
