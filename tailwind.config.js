const colors = require('@tailwindcss/postcss7-compat/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      teal: colors.teal,
      violet: colors.violet,
      green: colors.green,
      red: colors.red,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
