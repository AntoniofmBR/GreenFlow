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
        background: '#F8F9FA',
        button_background: '#262626',
        button_hover_background: '#141414',
        title_homepage: '#2C6E49',
        card_background: '#EDF2F4',
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
