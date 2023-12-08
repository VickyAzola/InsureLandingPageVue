/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Bg':'#2D2640',
        'Titles&Hover': '#2B272F',
        'line': '#d4c7d5',
        'RoundIconBg': '#95A9C6',
        'Paragraph&Social': '#837D87',
        'Light-Bg': '#FAFAFA',
      }
    },
  },
  plugins: [],
}
