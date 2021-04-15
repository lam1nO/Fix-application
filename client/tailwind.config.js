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
      txt: {
        black: "#44403C",
        white: "#FAFAF9"
      },
      blur: {
        40: "rgba(244, 244, 244, 0.4)",
      },
      rose: colors.rose,

    },
    extend: {
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
