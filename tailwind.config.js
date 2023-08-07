/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      Colors: {
        "lighter1": "var(--lighter1)",
        "lighter2":"var(--lighter2)",
        "Darken":"var(--Darken)",
        "color":"var(--color)"
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      screens:{
       

      'md': {'max': '767px'},

      'sm': {'max': '639px'}, 
      }
      

    },
  },
  plugins: [],
};
