/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#04C700',
        'secondary' : '#D4FED3',
        'tertiery' : '#7ECB7D',
      },
    },
  },
  plugins: [],
}
