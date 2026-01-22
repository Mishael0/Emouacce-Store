/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
        'slideInRight': 'slideInRight 0.3s ease-out',
        'slideInLeft': 'slideInLeft 0.3s ease-out',
        'fadeIn': 'fadeIn 0.2s ease-in',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
       lineClamp: {
        2: '2',
        3: '3',
      },
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
}
