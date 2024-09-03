/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#73b9d7",
      darkBlue: "#295793",
      lightYellow: "#ffd79a9c",
      secondary: "#F6E5C9",
    },
    fontFamily:{
      roboto: ["Roboto", "sans-serif"],
      montaguSlab: ["Montagu Slab","serif"],
      sansitaSwashed: ["Sansita Swashed"],
    }
  },
  plugins: [],
};
