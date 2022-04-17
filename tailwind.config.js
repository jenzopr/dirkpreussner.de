const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        white: '#FFFFFF',
        transparent: 'transparent',
        currentColor: 'currentColor',
        gray: colors.zinc,
        burgund: {
          100: '#FDF9F9',
          200: '#E4B1B6',
          300: '#CA6872',
          400: '#B73453',
          500: '#A30034',
          600: '#8E012E',
          700: '#780328',
          800: '#630422',
          900: '#4D051C'
        }
      }
  },
  plugins: [],
}
