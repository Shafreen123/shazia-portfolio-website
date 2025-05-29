/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
   theme: {
    extend: {
      fontFamily: {
        // Default sans font for general use (optional)
        sans: ['Poppins', 'sans-serif'],

        // Formal serif font for your quote or headings
        formal: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

