module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "content-background": "url('../public/assets/Coffee_Shop.jpg')",
        "store-background": "url('../public/assets/Storefront.jpg')",
      },
      backgroundColor: {
        eraser: "#ecd7ba",
        chalkborder: "#756136",
      },
      borderColor: {
        chalkborder: "#756136",
      },
      borderWidth: {
        15: "15px",
      },
      fontFamily: {
        cursive: ["Gochi Hand", "cursive"],
      },
      dropShadow: {
        eraser: "6px -6px 0px #3C3C3C",
        eraserTwo: "-6px -6px 0px #3C3C3C",
      },
    },
  },
  plugins: [],
};

