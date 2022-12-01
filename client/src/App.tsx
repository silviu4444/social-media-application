import {
  useMediaQuery,
  createTheme,
  PaletteMode,
  CssBaseline
} from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';

import { ThemeProvider } from '@emotion/react';

import './App.css';
import Register from './pages/authentication/components/register/Register';
import HomePage from './pages/home/components/home/Home';
import { RouterLinks } from './shared/constants/routes/routes';
import { lightModeTheme } from './shared/theme/light-theme';
import { darkModeTheme } from './shared/theme/dark-theme';
import { useSelector } from 'react-redux';
import { UIThemeModeState } from './store/UI/ui.selectors';
import useSwitchThemeMode from './shared/hooks/hooks/utility/useSwitchThemeMode';
import useUpdateLanguage from './shared/hooks/hooks/utility/useUpdateLanguage';

const router = createBrowserRouter([
  {
    path: RouterLinks.HOME,
    element: <HomePage />
  },
  {
    path: RouterLinks.AUTH,
    element: <Register />
  }
]);

const getDesignTokens = (mode: PaletteMode) =>
  mode === 'light' ? lightModeTheme : darkModeTheme;

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode = useSelector(UIThemeModeState);
  useUpdateLanguage();
  useSwitchThemeMode(prefersDarkMode);

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
