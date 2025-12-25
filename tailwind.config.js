/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 15s  linear infinite',
        'pulse-soft': 'pulse-glow3s ease-in-out infinite',
      },
      keyframes:{
        'pulse-glow': {
         '0%, 100%': {opacity: '1', filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' },
         '50%': {opacity: '0.7', filter: 'drop-shadow(0 8px rgba(255,255,255,1))' },
        },
      },
    },
  },
  plugins: [],
}