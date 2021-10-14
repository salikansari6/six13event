module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F0A401",
        secondary: "#151515",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
