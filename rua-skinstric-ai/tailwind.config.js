/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 44s linear infinite",
        "spin-slower": "spin 48s linear infinite",
        "spin-slowest": "spin 50s linear infinite",
      },
    },
  },
  plugins: [],
};
