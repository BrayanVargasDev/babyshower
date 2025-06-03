/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './components/**/*.{js,ts,jsx,tsx,mdx,astro}',
    './app/**/*.{js,ts,jsx,tsx,mdx,astro}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Great Vibes', 'cursive'],
        body: ['Nunito Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
