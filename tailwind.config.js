/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'xl-2': '24px',
      },
      lineHeight: {
        'custom': '36.53px',
      },
      colors: {
        primary: {
          100: '#19D87E',
          200: '#32EC14',
          300: '#A1CE5C',
          400: '#7CD153',
          500: '#5FA549',
          600: '#128737',
          800: '#033221',
          900: '#04583A',
        },
        secondary:{
          100:'#343A40',
          200:'#111214',
          300:'#121212',
          400:'#25262B',
          500:'#25262B',
          600:'#5C5F66',
          700:'#101113',
          800:'#1F1F1F',
        },
        btmcolor:{
          100:'#4B63DD',
          200:'#0524BFFC',
        },
        background: {
          100: '#F2F2F2'
        }
      },
    },
  },
  plugins: [],
};
