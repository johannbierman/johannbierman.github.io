/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        softWhite: "#F7F7F7",
        charcoal: "#36454F",
      },
    },
  },
  plugins: [],
};
