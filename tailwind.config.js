/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20",
      },
      padding: {
        "10%": "10%",
        "8%": "8%",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
