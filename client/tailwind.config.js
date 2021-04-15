const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      warm: colors.warmGray,
      yellow: colors.amber,
      lightBlue: colors.lightBlue,
      gray: colors.blueGray,
      green: colors.green,
      blue: colors.blue,
      txt: {
        black: "#44403C",
        white: "#FAFAF9"
      },
      rose: colors.rose,

    },
    extend: {
      boxShadow: {
        'green': '0 0px 20px 0 #4ADE80',
        'blue': '0 0px 20px 0 #7DD3FC',
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
