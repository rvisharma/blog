module.exports = {
  mode: 'jit',
  purge: ['./dist/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.serif'),
            a: {
              fontWeight: theme('fontWeight.semibold'),
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.display'),
            },
            'h1,h2': {
              fontWeight: theme('fontWeight.bold'),
            },
            'h3,h4,h5,h6': {
              fontWeight: theme('fontWeight.semibold'),
            },
          },
        },
      }),
      fontFamily: {
        serif:
          '"Source Serif Pro", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;',
        display:
          '"Philosopher", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
