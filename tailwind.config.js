/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray100: '#F4F7FB',
        Gray600: '#8690A2',
        Gray700: '#646E82',
        PB200: '#D1EEF4',
        PB400: '#74CDDE',
        PB500: '#18ACC8',
        PB600: '',
        PB800: '#0A4550',
        PB900: '#052228',
        GD100: '#FEF3E9'
      },
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],
        Lato: ['Lato']
      }
    },
  },
  plugins: [],
}