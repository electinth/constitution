const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
      14: '14px',
      13: '13px',
      12: '12px',
      11: '11px',
      10: '10px',
      9: '9px',
      8: '8px',
    },
    colors: {
      black: '#131313',
      white: 'white',
    },
  },
  variants: {},
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
