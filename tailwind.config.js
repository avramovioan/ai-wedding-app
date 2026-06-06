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
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "slide-up": "slideUp 0.6s ease-out both",
        "arrow-wobble": "arrowWobble 2s ease-in-out infinite",
        "emoji-sway": "emojiSway 2s ease-out 1 both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        arrowWobble: {
          "0%": { transform: "rotate(10deg)" },
          "30%": { transform: "rotate(20deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
        emojiSway: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "70%": { transform: "scale(1.25)" },
          "85%": { transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
