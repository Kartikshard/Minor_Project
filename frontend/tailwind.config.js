/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tealCustom: '#004d40',
      }
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};

