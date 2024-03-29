
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx}","./pages-components/**/*.{html,js,jsx,tsx}","./components/**/*.{html,js,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#528ecc",
          dark: "#284a6c",
          light: "#cddceb"
        },
        gray: {
          dark: "#323232"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}