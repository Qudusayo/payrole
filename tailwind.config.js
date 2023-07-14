/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3981F7",
        },
        black: {
          DEFAULT: "#0A112F",
        },
      },
    },
    screens: {
      xl: {
        max: "1279px",
      },
      lg: {
        max: "1023px",
      },
      md: {
        max: "767px",
      },
      sm: {
        max: "639px",
      },
      xs: {
        max: "479px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
