/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '350px',
      'md': '576px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1199px',
      '3xl':'1500px'
    },
    extend: {
      margin: {
        '18': '68px',
        '19': '76px',
        '25': '100px',
        '26': '109px',
        '97': '36rem'
      },

      keyframes: {
        "slide-in-1": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-2": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-3": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-in-4": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-in-5": {
          "0%": { transform: "translate(-100%, -100%)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
        "slide-in-6": {
          "0%": { transform: "translate(100%, 100%)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
      animation: {
        "slide-in-1": "slide-in-1 1s forwards",
        "slide-in-2": "slide-in-2 1s forwards",
        "slide-in-3": "slide-in-3 1s forwards",
        "slide-in-4": "slide-in-4 1s forwards",
        "slide-in-5": "slide-in-5 1s forwards",
        "slide-in-6": "slide-in-6 1s forwards",
      },

      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },

    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
