const {
  guessProductionMode
} = require('@ngneat/tailwind');

const path = require('path');
const process = require('process');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
    accent: {
      ...colors.blueGray,
      DEFAULT: colors.blueGray[800],
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600],
    },
    'on-warn': {
      500: colors.red['50'],
    },
  },
  // Rest of the themes will use the 'default' as the base theme
  // and extend them with their given configuration
  teal: {
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[600],
    },
  },
  purple: {
    primary: {
      ...colors.purple,
      DEFAULT: colors.purple[600],
    },
  },
  amber: {
    primary: colors.amber,
  },
};

/**
 * Tailwind configuration
 *
 * @param isProd
 * This will be automatically supplied by the custom Angular builder
 * based on the current environment of the application (prod, dev etc.)
 */
const config = {
  prefix: '',
  darkMode: 'class',
  important: true,
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,scss,ts}', './libs/**/*.{html,scss,ts}'],
    options: {
      safelist: {
        standard: ['light', 'dark'],
        deep: [/^theme/],
      },
    },
  },
  theme: {
    fontFamily: {
      sans: ['IRANSans', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.8125rem',
      base: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '6rem',
      '10xl': '8rem',
    },
    screens: {
      print: {
        raw: 'print'
      },
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      flex: {
        0: '0 0 auto',
      },
      opacity: {
        12: '0.12',
        38: '0.38',
        87: '0.87'
      },
      rotate: {
        '-270': '270deg',
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '270': '270deg'
      },
      scale: {
        '-1': '-1',
      },
      // @tailwindcss/typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text-default)',
            '[class~="lead"]': {
              color: 'var(--color-text-secondary)',
            },
            a: {
              color: 'var(--color-primary-500)',
            },
            strong: {
              color: 'var(--color-text-default)',
            },
            'ol > li::before': {
              color: 'var(--color-text-secondary)',
            },
            'ul > li::before': {
              backgroundColor: 'var(--color-text-hint)',
            },
            hr: {
              borderColor: 'var(--color-border)',
            },
            blockquote: {
              color: 'var(--color-text-default)',
              borderLeftColor: 'var(--color-border)',
            },
            h1: {
              color: 'var(--color-text-default)',
            },
            h2: {
              color: 'var(--color-text-default)',
            },
            h3: {
              color: 'var(--color-text-default)',
            },
            h4: {
              color: 'var(--color-text-default)',
            },
            'figure figcaption': {
              color: 'var(--color-text-secondary)',
            },
            code: {
              color: 'var(--color-text-default)',
              fontWeight: '500',
            },
            'a code': {
              color: 'var(--color-primary)',
            },
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: 'var(--color-text-default)',
              borderBottomColor: 'var(--color-border)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--color-border)',
            },
            'ol[type="A" s]': false,
            'ol[type="a" s]': false,
            'ol[type="I" s]': false,
            'ol[type="i" s]': false
          },
        },
        sm: {
          css: {
            code: {
              fontSize: '1em',
            },
            pre: {
              fontSize: '1em',
            },
            table: {
              fontSize: '1em',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {},
  plugins: [
    // Tailwind plugins
    require(path.resolve(__dirname, ('libs/shared/styles/src/tailwind/plugins/extract-config'))),
    require(path.resolve(__dirname, ('libs/shared/styles/src/tailwind/plugins/utilities'))),
    require(path.resolve(__dirname, ('libs/shared/styles/src/tailwind/plugins/icon-size'))),
    require(path.resolve(__dirname, ('libs/shared/styles/src/tailwind/plugins/theming')))({
      themes
    }),
    // Other third party and/or custom plugins
    require('@tailwindcss/typography')({
      modifiers: ['sm', 'lg']
    }),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
};

module.exports = config;
