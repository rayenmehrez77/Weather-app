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
        DEFAULT: "#E7E7EB",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      blue: {
        dark: "#1E213A",
        darkest: "#100E1D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
