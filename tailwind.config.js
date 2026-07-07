/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/PaperMod/layouts/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1d1e20",
        light: "#f5f5f5",
        primary: "#2563eb",
        secondary: "#64748b"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
