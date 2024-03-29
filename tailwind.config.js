/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: "Times New Roman",
      wedding: "Shantell Sans",
    },
    extend: {
      objectPosition: {
        "center-bottom": "center bottom",
      },
    },
  },
  plugins: [],
};
