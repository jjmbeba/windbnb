/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins',
        'montserrat':'Montserrat',
        'mulish':'Mulish'

      },
      boxShadow:{
        'search':'0px 1px 6px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
