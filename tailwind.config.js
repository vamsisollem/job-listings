/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'background': 'var(--Light-Grayish-Cyan)',
      'element': 'var(--Light-Grayish-Cyan-tabs)',
      'cyan': 'var(--Desaturated-Dark-Cyan)',
      'black':'var( --Very-Dark-Grayish-Cyan)',
      'gray':'var(--Dark-Grayish-Cyan)'
    }
  },
  plugins: [],
}

