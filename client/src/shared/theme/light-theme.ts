import { ThemeOptions } from '@mui/material';
import { themeTypography } from './shared';

export const lightModeTheme: ThemeOptions = {
  ...themeTypography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          a {
            color: #b3bbbb;
            text-decoration: none;
            font-weight: 600;
          }

          nav.app-navigation {
            background-color: #fafafa !important;
          }
        `
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#262626'
    },
    secondary: {
      main: '#0095F6',
      light: '#E76F51'
    },
    success: {
      main: '#006aff'
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#4b4d4e',
      secondary: '#1f1f1f',
      disabled: '#C2C2C2'
    }
  }
};
