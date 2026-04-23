/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'var(--color-bg-dark)',
        'bg-dark2': 'var(--color-bg-dark2)',
        'bg-accent': 'var(--color-bg-accent)',
        'bg-light': 'var(--color-bg-light)',
        'gray-mid': 'var(--color-gray-mid)',
        'gray-dark': 'var(--color-gray-dark)',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '50%': { boxShadow: '0 0 0 6px rgba(34, 197, 94, 0)' },
        },
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'pulse-green': 'pulse-green 2s infinite',
        'pulse-whatsapp': 'pulse-whatsapp 2s infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
