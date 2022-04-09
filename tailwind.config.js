module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [], 
    variants: {
      extend: {
        padding: ['hover'],
      }
    },
}