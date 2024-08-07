/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist:[
    'bg-green-500',
    'bg-orange-500'
  ],
  theme: {
    extend: {
      keyframes: {
        subtleBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        subtleBounce: 'subtleBounce 2s infinite',
        shimmer: 'shimmer 1.5s infinite'
      },
      colors: {
        primary: {
          1: "#F4F9F9",
          2: '#222831',
        },
        secondary: {
          1: '#C7C8CC',
          2: '#3a414e',
        },
        accent: {
          1: '#2e7cfb',
          2: '#00eaff',
          'low-contrast-1': '#b3d4ff',  
          'high-contrast-1': '#0056b3', 
          'low-contrast-2': '#a3faff', 
          'high-contrast-2': '#007a99', 
        },
        font: {
          1: '#ffffff',
          2: 'white',
        },
        content: {
          1: '#BBBFCA',
          2: '#1f242a',
          'main-text-1': '#222',
          'main-text-2': '#fff',
          'secondary-text-1': '#444',
          'secondary-text-2': '#ccc',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        '1/2': '50%',
      },
    },
  },
  variants: {
      animation: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
  darkMode:'class'
}

