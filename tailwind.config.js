module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2C3D4E",
        "secondary-color": "#42B883",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
