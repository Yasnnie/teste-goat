/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sb: "8px",
      },
      width: {
        card: "120px",
        "card-img": "72px",
      },
      height: {
        card: "120px",
        "card-img": "72px",
        box: "245px",
      },
      colors: {
        exotic: "#F09",
        mythical: "#DD2929",
        legendary: "#DDA429",
        epic: "#5F29DD",
        rare: "#0084F3",
        uncommon: "#00F308",
        common: "#898989",
      },
      boxShadow: {
        "exotic-shadow": "0px 0px 25px 0px rgba(255, 0, 153, 0.75)",
      },
      backgroundImage: {
        "exotic-gradient":
          "linear-gradient(65deg, rgba(255, 0, 153, 0.50) -6.69%, rgba(255, 0, 153, 0.25) 53.29%)",
        "mythical-gradient":
          "linear-gradient(65deg, rgba(221, 41, 41, 0.50) -6.69%, rgba(221, 41, 41, 0.25) 53.29%)",
        "legendary-gradient":
          "linear-gradient(65deg, rgba(221, 164, 41, 0.50) -6.69%, rgba(221, 164, 41, 0.25) 53.29%)",
        "epic-gradient":
          "linear-gradient(65deg, rgba(95, 41, 221, 0.50) -6.69%, rgba(95, 41, 221, 0.25) 53.29%)",
        "rare-gradient":
          "linear-gradient(65deg, rgba(0, 132, 243, 0.47) -6.69%, rgba(0, 132, 243, 0.25) 53.29%)",
        "uncommon-gradient":
          "linear-gradient(65deg, rgba(0, 243, 8, 0.47) -6.69%, rgba(0, 243, 8, 0.25) 53.29%)",
        "common-gradient":
          "linear-gradient(65deg, rgba(137, 137, 137, 0.47) -6.69%, rgba(137, 137, 137, 0.25) 53.29%)",
      },
      borderWidth: {
        subtitle: "1px",
      },
      fontFamily: {
        sans: ["Spline Sans", "sans-serif"],
      },
    },
    backgroundImage: {
      bgImg: "url('/src/assets/background.png')",
    },
    textColor: {
      "card-text": "rgba(255, 255, 255, 0.10)",
      white: "#ffffff",
    },
  },
  plugins: [],
};
