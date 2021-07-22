import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      label: {
        fontFamily: 'Montserrat, sans-serif'
      }
    },
    MuiTypography: {
      subtitle1: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        fontSize: '1.2rem',
        lineHeight: '1.6'
      },
      subtitle2: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        fontSize: '1rem'
      },
      h3: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      },
      body1: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.75',
        color: '#3F3F3F'
      },
      h1: {
        fontSize: '1.9rem',
        fontWeight: 'bold',
        fontFamily: 'Montserrat, sans-serif;',
        color: '#3B3B3B',
        lineHeight: '1.5'
      },
      h2: {
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'Montserrat, sans-serif;',
        color: '#3F3F3F',
        lineHeight: '1.75'
      }
    },
    MuiInputBase: {
      input: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        fontSize: '0.9rem'
      }
    }
  }
})

export default theme
