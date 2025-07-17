/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-grow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "spin-slow": "spin 34s linear infinite",
        "spin-slower": "spin 38s linear infinite",
        "spin-slowest": "spin 40s linear infinite",
        "pulse-grow": "pulse-grow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
