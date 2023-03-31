/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        wAqua: {
          DEFAULT: "#00A0A0",
          50: "#7FCFCF",
          10: "#E5F5F5",
          5: "#F2FAFA",
        },
        wPurple: {
          DEFAULT: "#3A1730",
          50: "#9C8B97",
          10: "EBE7EA",
          5: "#F5F3F4",
        },
        wRed: "#E42313",
        wAmber: "#FF8000",
      },
    },
  },
  plugins: [],
};
