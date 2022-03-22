module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      lostpassword: '#E487FB'
    },
    colors: {
      purple: '#3E1149',
      black: ' #000000',
      button: '#E487FB'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}
