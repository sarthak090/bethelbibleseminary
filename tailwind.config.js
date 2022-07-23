/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1d2a64",
        primaryPink: "#906",
        footerBlue: "#1D2A64",
        footerDarkBlue: "#0d1a53",
      },
    },
  },
  plugins: [],
};
