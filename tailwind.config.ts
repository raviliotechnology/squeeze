/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Menambahkan 'inter' agar dapat digunakan sebagai class 'font-inter'
        inter: ['Inter', 'sans-serif'], 
      },
      colors: {
        // Definisi warna kustom agar mudah digunakan: 'bg-primary-blue'
        'primary-blue': '#293a84',
      },
    },
  },
  plugins: [],
}