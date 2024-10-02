/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],  // Default font for body
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

