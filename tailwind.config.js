/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "cat": "url('https://bit.ly/fcc-relaxing-cat')"
      }
    },
  },
  plugins: [],
}

