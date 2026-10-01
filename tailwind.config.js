/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E4B3D',
          light: '#2A6653',
          dark: '#143128'
        },
        secondary: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C'
        },
        accent: {
          DEFAULT: '#8BC34A',
          light: '#AED581',
          dark: '#689F38'
        },
        background: '#F9FBF9',
        foreground: '#1A231E',
        muted: '#E8F0EA'
      }
    },
  },
  plugins: [],
}
