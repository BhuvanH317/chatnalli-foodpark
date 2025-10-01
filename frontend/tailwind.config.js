/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF6E3',
          100: '#F5E6D3',
          200: '#E6C8A2',
          300: '#D2B48C',
          400: '#CD853F',
          500: '#8B4513',
          600: '#7A3F12',
          700: '#693510',
          800: '#582B0E',
          900: '#47220C'
        }
      }
    },
  },
  plugins: [],
};