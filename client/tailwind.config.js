const colors = require("tailwindcss/colors");

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
        white: "#FAFAF9",
      },
      blur: {
        40: "rgba(244, 244, 244, 0.4)",
      },
      rose: colors.rose,
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        green: "0 0px 20px 0 #4ADE80",
        blue: "0 0px 20px 0 #7DD3FC",
        blue_10: "0px 0px 10px #9cdefb",
        rose: "0 0 20px 0 #FB7185",
        yellow: "0 0 20px 0 #FBBF24",
        yellow_10: "0 0 10px 0 #FBBF24",

        dark: "0 0 20px 0 #000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
