/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'fullvh': '100vh',
      },
      colors: {
        'dark-blue': '#11175D',
      },
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
        'OpenSans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
