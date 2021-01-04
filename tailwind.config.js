const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      heading: ['Kondolar Thai', ...defaultTheme.fontFamily.serif],
      subtitle: ['Anuphan', ...defaultTheme.fontFamily.sans],
      body: ['Bai Jamjuri', ...defaultTheme.fontFamily.sans],
      button: ['Anuphan', ...defaultTheme.fontFamily.sans],
    },
    lineHeight: {
      1.2: '120%',
      1.3: '130%',
      1.4: '140%',
      1.5: '150%',
      1.6: '160%',
    },
    fontSize: {
      48: '48px',
      36: '36px',
      24: '24px',
      21: '21px',
      18: '18px',
      17: '17px',
      16: '16px',
      15: '15px',
      14: '14px',
      13: '13px',
      12: '12px',
      11: '11px',
      10: '10px',
      9: '9px',
      8: '8px',
    },
    colors: {
      black: 'black',
      dark: '#131313',
      white: 'white',
      'light-gray-1': '#EBEBEB',
      'light-gray-2': '#F5F5F5',
      'light-gray-3': '#d9d9d9',
      'gray-1': '#4B4B4B',
      'gray-2': '#2b2b2b',
      blue: '#0077cc',
      teal: '#444D5F',
    },
    extend: {
      transitionProperty: {
        'size-spacing': 'height, width, margin, padding',
        opacity: 'opacity',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
};
