/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        whites: {
          white_200: '#F8F9FA',
          white_300: '#EDF2F4',
          white_400: '#FFFFFF',
        },
        greens: {
          green_200: '#2C6E49',
        },
        blacks: {
          black_200: '#262626',
          black_300: '#141414',
          black_300: '#000000',
        },
      },
    },
    screens: {
      sm: '320px',
      md: '1025px',
      lg: '1200px',
    }
  },
  plugins: [],
}
