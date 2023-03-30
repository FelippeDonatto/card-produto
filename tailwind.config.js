/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      rose: {
        900: '#271A45',
        100: '#D9CDF7'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-crimson)'],
        mono: ['var(--font-lato)']
      }
    }
  },
  plugins: []
}
