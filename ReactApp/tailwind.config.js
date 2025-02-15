/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkpurple: "#000435",
        lightpurple: "#2196f3",
        // darkpurple: "#242745",
        // lightpurple: "#7367F0",
        grey: "#1F2937",
        lightgrey: "#9CA3A6",
        bgpurple: "#f8f7fa",
        blue: "#2196f3",
        dark: "#111726",
      },
      boxShadow: {
        custom: "0 5px 7px 0 #c9c8ce",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
