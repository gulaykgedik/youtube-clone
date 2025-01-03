/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#3b403f",
      },
    },
  },
  plugins: [],
};
