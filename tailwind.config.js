/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      boxShadow:{
        button: '0px 15px 15px -10px #FF9F8E'
      },
      backgroundImage:{
        'bgTop' : "url('/src/images/body-svg.svg')",
        'bgTopDesktop': "url('/src/images/body-desktop-svg.svg')",
        'bgTop-2' : "url('/src/images/body-svg.svg')",
        'bgTopDesktop-2': "url('/src/images/body-desktop-svg.svg')",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
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
        '40px': '40px',
        '56px' : '56px'
      },
      minWidth: {
        'hero-card': '280px',
        'hero-title' : '300px',
        'different' : '323px'
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
        'hero-title-color' : '#242D52',
        'different-line' : '#FFF0EC',
        'footer-bg' : '#1D1E25',
        'carousel-bg' : '#FAFAFA',
        
      },
      fontFamily:{
        vietnam: ['Be Vietnam Pro'],
      }
    },
    maxWidth:{
      my: '1150px',
      herocardmax: '500px',
      herotitle: '494px',
      differentdesc : '327px',
      different : '330px',
      '445' :  '445px',
      '540' : '447px',
      '451' : '451px',
      '200' : '200px',
      '1440' : '1440px',
      '340' : '340px',
      
    },
    backgroundImage: {
      simplify: 'url("/src/images/simpify.jpg")',
      simplify: 'url("/src/images/simpify-desktop.jpg")'
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
      'hero-lineheight' : '64px',
      'different-lineheight' : '28px'
    }
  },
  plugins: [],
}
