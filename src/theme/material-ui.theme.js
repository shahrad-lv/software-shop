import { createMuiTheme } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

export default  createMuiTheme({
    typography: {
      body1: {
        fontSize: '1.1rem'
      }
    },
    palette: {
      primary: {
        main: '#050b2b'
      },
      secondary: {
          light: cyan['A100'],
          main: cyan['A400'],
          dark: cyan[900]
      }
    },
    breakpoints : {
      values : {
        xs: 0,
        sm: 800,
        md: 1200,
        lg: 1590,
        xl: 1920,
      }
    },
  });