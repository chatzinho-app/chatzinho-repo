/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
// const nativewind = require('nativewind/tailwind/native')

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#8D7DFF',
      secondary: '#CFFF5E',
      tertiary: '#B87EEE',
      'gray-1': '#1A1A1A',
      'gray-2': '#F9F9F9',
      error: '#FF6363',
    },
    fontFamily: {
      Thin: ['Raleway100Thin'],
      Light: ['Raleway300Light'],
      Normal: ['Raleway400Regular'],
      Medium: ['Raleway500Medium'],
      Semibold: ['Raleway600SemiBold'],
      Bold: ['Raleway700Bold'],
      Extrabold: ['Raleway800ExtraBold'],
    },
    fontSize: {
      sm: 14, //    14px
      base: 16, //      16px
      xl: 18, //    18px
      '2xl': 20, //  20px
      '3xl': 30, // 30px
    },
    spacing: {
      0: 0,
      0.5: 5, // 5px sm
      1: 10, //  10px md
      2: 15, //  15px lg
      3: 20, //   20px xl
      4: 25, //  25px 2xl
      5: 30, //  30px 3xl
      6: 35, //    35px 4xl
      7: 40, //  40px 5xl
      8: 45, //   45px 6xl
    },
    borderRadius: {
      sm: 5,
      md: 10,
      lg: 20,
      full: 9999,
    },
  },
  plugins: [],
}
