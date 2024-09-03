/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-logo': '#a04ef0',
        'pink-logo': '#ec11cf',
        'blue-logo': '#44aefa',
        'orange-logo': '#f5a04d',
        'yellow-logo': '#f8ca2e'
      },
    },
  },
  plugins: [],
}

