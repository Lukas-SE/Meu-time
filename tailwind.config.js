/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit", 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "narrow": {"raw": "(max-height: 600px)"},
      },
      colors: {
        light: {
          400: "#F2F2F2",
          500: "#32E0C4",
          600: "#0ABBC2",
          700: "#212121",
        },
        dark: {
          400: "#94F3E4",
          500: "#37AA9C",
          600: "#333F44",
          700: "#1A1A1B",
        },
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
