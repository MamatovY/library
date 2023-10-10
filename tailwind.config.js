/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px', // Максимальная ширина 1280px для lg и больше
        xl: '1280px',
        "2xl": "1536px"
      },
    },
    extend: {},
  },
  plugins: [],
}

