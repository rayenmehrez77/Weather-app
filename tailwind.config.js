module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        dark: "#6E707A",
        darkest: "#585676",
        default: "#E7E7EB",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      blue: {
        dark: "#1E213A",
        darkest: "#100E1D",
        btn: "#3C47E9",
      },
      fontFamily: {
        ral: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
