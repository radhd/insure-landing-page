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
      backgroundImage: {
        mobileImage: "url(images/image-intro-mobile.jpg)",
        desktopImage: "url(images/image-intro-desktop.jpg)",
        mobileBgPatternIntroLeft:
          "url(images/bg-pattern-intro-left-mobile.svg)",
        desktopBgPatternIntroLeft:
          "url(/images/bg-pattern-intro-left-desktop.svg)",

        mobileBgPatternIntroRight:
          "url(images/bg-pattern-intro-right-mobile.svg)",
        desktopBgPatternIntroRight:
          "url(images/bg-pattern-intro-right-desktop.svg)",

        mobileHowWorkPattern: "url(images/bg-pattern-how-we-work-mobile.svg)",
        desktopHowWorkPattern: "url(images/bg-pattern-how-we-work-desktop.svg)",
      },
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
