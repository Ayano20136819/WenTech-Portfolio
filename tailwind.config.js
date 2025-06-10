/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Tailwind's 'blue-700'
        secondary: "#9333EA", // Tailwind's 'purple-600'
      },
    },
  },
  plugins: [],
};
