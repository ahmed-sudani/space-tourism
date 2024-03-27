const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bellefair"', ...defaultTheme.fontFamily.serif],
        sans: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
