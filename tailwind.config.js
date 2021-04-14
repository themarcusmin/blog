module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['"Noto Serif SC"', 'serif']
      },
      colors: {
        'darken': '#202124',
        // 'spaceGray': ,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
