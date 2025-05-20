/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bordo': "url('/public/nosotros/fondo bordo.png')",
        'custom-claro': "url('/public/nosotros/fondo claro.png')",
      },
      colors: {
        customColor: '#E9E4CC',
      },
      fontFamily: {
        'alegreya-sc': ['Alegreya SC', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

