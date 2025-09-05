/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff9e6",
          100: "#ffefcc",
          200: "#ffdf99",
          300: "#ffcf66",
          400: "#ffbf33",
          500: "#ffd700",
          600: "#ccac00",
          700: "#998100",
          800: "#665600",
          900: "#332b00",
        },
        secondary: {
          500: "#e50914",
        },
        dark: {
          500: "#0f172a",
          600: "#0a0f1d",
          700: "#05080f",
        },
        movie: {
          gold: "#ffd700",
          red: "#e50914",
          dark: "#1a202c",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
