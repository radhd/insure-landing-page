/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        custom: {
          dark: "rgba(44, 40, 48, 1)",
          gray: "rgba(131, 125, 136, 1)",
          dark2: "rgba(45, 38, 65, 1)",
          silver: "rgba(150, 169, 198, 1)",
          white: "rgba(250, 250, 250, 1)",
        },
      },
    },
  },
  plugins: [],
};
