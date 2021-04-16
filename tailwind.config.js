module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif SC"', 'serif']
      },
      colors: {
        // #1C1C1C
        'darken': '#1C1C1C',
        'darkGrey': '#1E1E1E',
        'softDarken': '#282828',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
