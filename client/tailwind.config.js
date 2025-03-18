/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"], // Include .tsx and .ts files
  theme: {
    extend: {
      colors: {
        navbar: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
