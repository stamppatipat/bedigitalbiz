/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blueGray': '#525f7f',
      'dodgerblue': "#0057FF",
      'midnightblue': '#001B50',
      'electricblue' : '#1444EF',
      'grey500': '#ECECEC',
      'blue' : "#1443ED",
      'blue-800' : "#1e40af",
      'sky' : "#0ea5e9",
      'lightgrey' : "#A8AEB9",
      'cornflowerblue' : "#6493EA",
      'translucentwhite' : "rgba(255, 255, 255, 0.65)",
      'red': '#ef4444',
      'pink-600': '#db2777',
      'lime-500': '#84cc16',
      'darkmode': '#121212',
      'gray-300': '#1F2937',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '85xl': ['85px', { lineHeight: '1' }],
    },
    extend: {},
  },
  plugins: [],
}

