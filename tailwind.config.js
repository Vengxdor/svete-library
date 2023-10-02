/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lines: '#f8f8fb',
        activeLight: '#fcdb8d',
        activeDark: '#a1f4e9',
        linesDark: '#1a1c1e'
      }
    }
  },
  plugins: []
}
