module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue:{
          primary:'#3b74f2'
        },
        green:{
          primary:  '#c7ffa6'
        },
      },
      fontFamily:{
        poppins: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
