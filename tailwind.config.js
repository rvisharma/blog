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
            li: {
              a: {
                fontFamily: theme('fontFamily.display'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.display'),

              /**
               * give some space on top
               */
              scrollMarginTop: '2em',

              /**
               * make the heading position relative for
               * absolute positioned link pseudo element
               */
              position: 'relative',

              /**
               * markdown it link plugin creates a anchor tag
               * with this class
               */
              '.header-anchor': {
                textDecoration: 'none',
              },
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
          '"PlusJakartaSans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
