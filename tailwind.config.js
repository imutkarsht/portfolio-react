/** @type {import('tailwindcss').Config} */
const gradients = require('tailwindcss-gradients');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#e3edfa',
          2: '#222831',
        },
        secondary: {
          1: '#c5cfdc',
          2: '#3a414e',
        },
        accent: {
          1: '#2e7cfb',
          2: '#00eaff',
          'low-contrast-1': '#b3d4ff',  // Low contrast version of accent color 1
          'high-contrast-1': '#0056b3', // High contrast version of accent color 1
          'low-contrast-2': '#a3faff',  // Low contrast version of accent color 2
          'high-contrast-2': '#007a99', // High contrast version of accent color 2
        },
        font: {
          1: '#ffffff',
          2: 'white',
        },
        content: {
          1: '#ffffff',
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
    extend: {},
  },
  plugins: [
    gradients,
  ],
}

