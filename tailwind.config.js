const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { 
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: { 
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
      })
    }),
  ],
}
