/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies files to scan for class usage
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: '1rem', // Adds default padding
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {

    },
  },
  plugins: [],
};
