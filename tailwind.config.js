/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        yellow: {
          '400': '#F8D038',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
