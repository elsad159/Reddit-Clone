/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        'tablet': '500px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  plugins: [],
}
