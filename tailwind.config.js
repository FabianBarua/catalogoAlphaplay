/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        squerelight:
          'repeating-linear-gradient(to right,#e3e3e3,#e3e3e3 1px,transparent 1px,transparent 50px),repeating-linear-gradient(to bottom,#e3e3e3,#e3e3e3 1px,transparent 1px,transparent 50px);',
        squeredark:
          'repeating-linear-gradient(to right,#242424,#242424 1px,transparent 1px,transparent 50px),repeating-linear-gradient(to bottom,#242424,#242424 1px,transparent 1px,transparent 50px);'
      },
      colors: { orange: '#eb912e' },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
