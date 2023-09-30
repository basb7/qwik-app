/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Fondo.jpeg')"
      },
      fontFamily: {
        Cookie: ['Cookie', 'cursive']
      }
    },
  },
  plugins: [],
};
