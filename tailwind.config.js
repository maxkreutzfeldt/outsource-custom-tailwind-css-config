/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const extendColors = require('./tailwind.config.extendColors');
const customPlugin = require('./tailwind.config.customPlugin');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: extendColors
    },
  },
  plugins: [
    customPlugin
  ],
}

