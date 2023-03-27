/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#e63946',
        'red-darker': '#a03946',
        'light': '#f1faee',
        'medium': '#a8dadc',
        'dark': '#457b9d',
        'darkest': '#1d3557',
      }
    },
  },
  plugins: [],
}