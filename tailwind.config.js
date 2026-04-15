/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF7',
        'cream-dark': '#F5F0E8',
        'espresso': '#3E2723',
        'espresso-light': '#5D4037',
        'terracotta': '#E07A5F',
        'terracotta-dark': '#C6684F',
        'terracotta-light': '#F4A261',
        'gray-light': '#E8E3D9',
      },
      fontFamily: {
        'primary': ['Crimson Text', 'serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
