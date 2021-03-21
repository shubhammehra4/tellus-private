const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    borderColor: ["hover", "focus", "focus-within"],
  },
  plugins: [],
}
