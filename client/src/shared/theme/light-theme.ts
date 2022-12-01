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
        `
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      dark: '#f4f7fc'
    },
    secondary: {
      main: '#2176ff',
      light: '#E76F51'
    },
    success: {
      main: '#006aff'
    },
    background: {
      default: '#ffffff',
      paper: '#F9FAFE'
    },
    text: {
      primary: '#4b4d4e',
      secondary: '#D3D4DC',
      disabled: '#C2C2C2'
    }
  }
};
