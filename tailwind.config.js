module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif SC"', 'serif']
      },
      colors: {
        'darken': '#1C1C1C',
        'darkGrey': '#121212',
        'softDarken': '#282828',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
