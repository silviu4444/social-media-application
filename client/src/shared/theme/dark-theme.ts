import { ThemeOptions } from '@mui/material';
import { themeTypography } from './shared';

export const darkModeTheme: ThemeOptions = {
  ...themeTypography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          a {
            color: #b3bbbb;
          }
        `
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#4b4b4b',
      dark: '#f4f7fc'
    },
    secondary: {
      main: '#2176ff',
      light: '#E76F51'
    },
    background: {
      default: '#1a1e20',
      paper: '#262b30'
    },
    text: {
      primary: '#fff',
      secondary: '#c3cbcb',
      disabled: '#646262'
    },
    success: {
      main: '#006aff'
    }
  }
};
