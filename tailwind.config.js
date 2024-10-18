/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "#000000",
        primaryDarkBlack: "#121212",
        primaryDimBlack: "#242424",          
        primaryLightBlack: "#3B3B3B",          
        primarySemiBlack: "#5A5A5A",          
        primaryLightGray: "#707070",
        primaryGray: "#7E7F7F",
      },
      fontFamily: {
        'body': ['"Open Sans"', "sans", "Tomato Grotesk"],
        'sans': ['Outfit', 'sans'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}