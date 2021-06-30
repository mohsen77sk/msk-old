const { guessProductionMode } = require('@ngneat/tailwind');

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = ['IRANSans', ...defaultTheme.fontFamily.sans];

/**
 * Themes
 */
const themes = {
  // Default theme is required for theming system to work correctly
  default: {
    primary: {
      ...colors.indigo,
      DEFAULT: colors.indigo[600],
    },
    'on-primary': {
      50: colors.indigo[900],
      100: colors.indigo[900],
      200: colors.indigo[900],
      300: colors.indigo[900],
      400: colors.indigo[900],
      500: colors.white,
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
    accent: {
      ...colors.blueGray,
      DEFAULT: colors.blueGray[800],
    },
    'on-accent': {
      50: colors.blueGray[900],
      100: colors.blueGray[900],
      200: colors.blueGray[900],
      300: colors.blueGray[900],
      400: colors.blueGray[900],
      500: colors.white,
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600],
    },
    'on-warn': {
      50: colors.red[900],
      100: colors.red[900],
      200: colors.red[900],
      300: colors.red[900],
      400: colors.red[900],
      500: colors.red[50],
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
  },

  // Rest of the themes will use the 'default' as the base theme
  // and extend them with their given configuration
  teal: {
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[600],
    },
    'on-primary': {
      50: colors.teal[900],
      100: colors.teal[900],
      200: colors.teal[900],
      300: colors.teal[900],
      400: colors.teal[900],
      500: colors.teal[900],
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
  },
  purple: {
    primary: {
      ...colors.purple,
      DEFAULT: colors.purple[600],
    },
    'on-primary': {
      50: colors.purple[900],
      100: colors.purple[900],
      200: colors.purple[900],
      300: colors.purple[900],
      400: colors.purple[900],
      500: colors.white,
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
  },
  amber: {
    primary: colors.amber,
    'on-primary': {
      50: colors.amber[900],
      100: colors.amber[900],
      200: colors.amber[900],
      300: colors.amber[900],
      400: colors.amber[900],
      500: colors.amber[900],
      600: colors.white,
      700: colors.white,
      800: colors.white,
      900: colors.white,
      DEFAULT: colors.white
    },
  },
};

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: fontFamily,
    },
    variables: {
      body: {
        color: themes.default,
      },
      'body.theme-teal': {
        color: themes.teal,
      },
      'body.theme-purple': {
        color: themes.purple,
      },
      'body.theme-amber': {
        color: themes.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      colorVariables: true,
      extendColors: {
        'primary': 'var(--color-primary)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',
        'on-primary': 'var(--color-primary)',
        'on-primary-50': 'var(--color-primary-50)',
        'on-primary-100': 'var(--color-primary-100)',
        'on-primary-200': 'var(--color-primary-200)',
        'on-primary-300': 'var(--color-primary-300)',
        'on-primary-400': 'var(--color-primary-400)',
        'on-primary-600': 'var(--color-primary-600)',
        'on-primary-700': 'var(--color-primary-700)',
        'on-primary-800': 'var(--color-primary-800)',
        'on-primary-900': 'var(--color-primary-900)',
        'accent': 'var(--color-accent)',
        'accent-50': 'var(--color-accent-50)',
        'accent-100': 'var(--color-accent-100)',
        'accent-200': 'var(--color-accent-200)',
        'accent-300': 'var(--color-accent-300)',
        'accent-400': 'var(--color-accent-400)',
        'accent-600': 'var(--color-accent-600)',
        'accent-700': 'var(--color-accent-700)',
        'accent-800': 'var(--color-accent-800)',
        'accent-900': 'var(--color-accent-900)',
        'on-accent': 'var(--color-accent)',
        'on-accent-50': 'var(--color-accent-50)',
        'on-accent-100': 'var(--color-accent-100)',
        'on-accent-200': 'var(--color-accent-200)',
        'on-accent-300': 'var(--color-accent-300)',
        'on-accent-400': 'var(--color-accent-400)',
        'on-accent-600': 'var(--color-accent-600)',
        'on-accent-700': 'var(--color-accent-700)',
        'on-accent-800': 'var(--color-accent-800)',
        'on-accent-900': 'var(--color-accent-900)',
        'warn': 'var(--color-warn)',
        'warn-50': 'var(--color-warn-50)',
        'warn-100': 'var(--color-warn-100)',
        'warn-200': 'var(--color-warn-200)',
        'warn-300': 'var(--color-warn-300)',
        'warn-400': 'var(--color-warn-400)',
        'warn-600': 'var(--color-warn-600)',
        'warn-700': 'var(--color-warn-700)',
        'warn-800': 'var(--color-warn-800)',
        'warn-900': 'var(--color-warn-900)',
        'on-warn': 'var(--color-warn)',
        'on-warn-50': 'var(--color-warn-50)',
        'on-warn-100': 'var(--color-warn-100)',
        'on-warn-200': 'var(--color-warn-200)',
        'on-warn-300': 'var(--color-warn-300)',
        'on-warn-400': 'var(--color-warn-400)',
        'on-warn-600': 'var(--color-warn-600)',
        'on-warn-700': 'var(--color-warn-700)',
        'on-warn-800': 'var(--color-warn-800)',
        'on-warn-900': 'var(--color-warn-900)',
      }
    }),
  ],
};
