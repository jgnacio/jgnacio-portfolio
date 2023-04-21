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
        electric_red: "#EF3054",
        "shadow-black": "#000000CC"
      },
      boxShadow: {
        "highlighter-line": `0 3px 0`
      }
    }
  },
  plugins: []
};
