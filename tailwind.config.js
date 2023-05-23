/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--primary-color)",
      },
      fontFamily: {
        sans: ["var(--font-ticketing)"],
        title: ["var(--font-paskowy)"],
      },
    },
    plugins: [],
  },
};
