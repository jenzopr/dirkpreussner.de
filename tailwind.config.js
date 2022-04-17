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
      },
      extend: {
        backgroundImage: {
          'methodenkoffer': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/tim-gouw-methods.jpg')",
          'kommunikation': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/jason-goodman-kommunikation.jpg')",
          'gruppendynamik': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/ulrichw-pixaby-gruppendynamik.jpg')",
          'fuehrung': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/altnet-pixabay-fuehrung.jpg')",
          'theater': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/contact-improvisation.jpg')",
          'reflexion': "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%), url('../public/dirk-reflexion.jpg')",
        }
      }
  },
  plugins: [],
}
