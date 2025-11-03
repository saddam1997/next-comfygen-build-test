/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './super-admin-components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
    './server.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
