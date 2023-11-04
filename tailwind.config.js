/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: 'rgba(234, 51, 36, 1)',
          200: '#F6FAFF',
          300: '#00008B',
        },
        'tertiary': {
          100: '#F6FAFF',
          200: '#00008B',
          300: '#E8F2FF',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        oxygen: ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}