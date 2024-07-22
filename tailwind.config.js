/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#f5f6f8',  // Nama kelas: 'custom-gray'
      },
    },
  },
  plugins: [],
}