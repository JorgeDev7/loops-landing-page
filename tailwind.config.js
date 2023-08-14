/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)"
      },
      fontSize: {
        base: ['15px', '24px']
      },
      fontFamily: {
        "alata": ['Alata', 'sans-serif'],
        "josefin": ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

