/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // optional, if you have src folder
    "./pages/**/*.{js,ts,jsx,tsx}", // added in case you're using Next.js pages
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F87171',
        secondary: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'macaron-gradient': 'linear-gradient(90deg, #f63a3c, #ff7a7c)', // 🍓 gradient
        'noise': "url('/assets/noise.png')", // optional: replace with your real noise texture
      },
      backgroundColor: {
        'noise-background': '#1a1a1a', // fallback solid bg
      },
    },
  },
  plugins: [],
  darkMode: 'media', // optional
}
