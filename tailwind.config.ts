import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // MAIN: Pink (primary accent — tombol, highlight, judul)
          DEFAULT: "#C24361",
          pink: "#C24361",
          pinklight: "#E8A0BF",
          pinkdark: "#9E314E",
          // SECOND: Cream (latar dominan / surface)
          cream: "#E1D9C6",
          creamlight: "#F1ECDF",
          creamdark: "#D4C9B0",
          white: "#F7F3EA",
          // Dark text
          browndark: "#3A1F28",
          ink: "#3A1F28",
          // accents
          clay: "#C9A27A",
          green: "#8BA888",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        accent: ['"Cormorant Garamond"', "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(194, 67, 97, 0.10)",
        elevated: "0 20px 40px -15px rgba(194, 67, 97, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;