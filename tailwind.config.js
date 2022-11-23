module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "content-background": "url('../public/assets/Coffee_Shop.jpg')",
        "store-background": "url('../public/assets/Storefront.jpg')",
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
    },
  },
  plugins: [],
};

