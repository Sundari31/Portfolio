/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#1e293b",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
