/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
    extend: {
      screens:{
        'xs':'480px',
        '2xs':'320px'
      },
      flexGrow: {
        '2': 2,
        '3':3,
      }
    },
  },
  plugins: [],
}
