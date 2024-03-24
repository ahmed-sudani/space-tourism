const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 12s linear infinite",
      },
      keyframes: {
        rotate: {
          from: {
            "background-position": "0px 0px;",
          },
          to: {
            "background-position": "610px 0px;",
          },
        },
      },
      fontFamily: {
        serif: ['"Bellefair"', ...defaultTheme.fontFamily.serif],
        sans: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
