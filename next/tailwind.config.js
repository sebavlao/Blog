const { nextui, colors } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|chip|image|input|navbar|pagination|toggle|user|ripple|spinner).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        category: {
          politic: "#06B7DB",
          games: "#F00567",
          series: "#FFEE38",
        },
      },
    },
  },
  safelist: [
    "bg-category-politic",
    "text-category-politic",
    "bg-category-games",
    "text-category-games",
    "bg-category-series",
    "text-category-series",
  ],
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            secondary: "#ffffff",
          },
        },
      },
    }),
  ],
};
