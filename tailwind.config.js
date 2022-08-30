/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '40px': '40px'
      },
      minWidth: {
        'hero-card': '280px',
        'hero-title' : '300px'
      },
      spacing: {
        '-12px': '-12px',
      },
      height: {
        '291': '291px',
      },
      colors: {
        'header-button': '#F3603C',
        'header-button-hover': '#F98F75',
        'hero-title-color' : '#242D52'
      },
      fontFamily:{
        vietnam: ['Be Vietnam Pro'],
      }
    },
    maxWidth:{
      my: '1150px',
      herocardmax: '500px',
      herotitle: '445px',
      differentdesc : '350px'
    },
    backgroundImage: {
      body: 'url("../images/body-bg.svg")'
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
      'hero-lineheight' : '64px'
    }
  },
  plugins: [],
}
