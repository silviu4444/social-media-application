import {
  useMediaQuery,
  createTheme,
  PaletteMode,
  CssBaseline
} from '@mui/material';
import { useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';

import './App.css';
import { lightModeTheme } from './shared/theme/light-theme';
import { darkModeTheme } from './shared/theme/dark-theme';
import { useSelector } from 'react-redux';
import { UIThemeModeState } from './store/UI/ui.selectors';
import useSwitchThemeMode from './shared/hooks/utility/useSwitchThemeMode';
import useUpdateLanguage from './shared/hooks/utility/useUpdateLanguage';

import AppRouter from './layout/app-router/AppRouter';

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
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
