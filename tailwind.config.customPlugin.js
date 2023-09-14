const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function({ addBase }) {
    addBase({
      '.text-disco': {
        'color': '#9336B4'
      }
    })
  }
)