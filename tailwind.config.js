/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": "#DE4917",
      "background-color": "#f8f6f0",
      "sub-color": "#507B54",
      "shading-color": "#E88357",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
