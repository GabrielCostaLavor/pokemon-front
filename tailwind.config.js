/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // Se você usar a estrutura src
    ],
    theme: {
      extend: {
        colors: {
        }
      },
    },
    plugins: [],
  }
  