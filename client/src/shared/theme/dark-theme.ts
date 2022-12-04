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

          nav.app-navigation {
            background-color: #262626 !important;
          }
        `
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#f1f1f1'
    },
    secondary: {
      main: '#0095F6',
    },
    success: {
      main: '#006aff'
    },
    background: {
      default: '#262626',
    },
    text: {
      primary: '#f1f1f1',
      secondary: '#f1f1f1',
      disabled: '#C2C2C2'
    }
  }
};
