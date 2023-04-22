/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "electric-red": "#FF0000",
        "shadow-black": "#000000CC"
      },
      boxShadow: {
        "highlighter-line": `0 2px 0`
      }
    }
  },
  plugins: []
};
