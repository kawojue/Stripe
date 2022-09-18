/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.html', 'public/*.js'],
  theme: {
    extend: {
      colors: {
        bg: {
          "clr-0": "rgb(97, 125, 152)"
        },
        txt: {
          "clr-0": " rgb(16, 42, 66)"
        }
      },
      fontFamily: {
        "poppins": ["Poppins", "san-serif"]
      },
      screens: {
        "sm": "600px",
        "md": "800px",
        "lg": "1200px"
      }
    },
  },
  plugins: [],
}