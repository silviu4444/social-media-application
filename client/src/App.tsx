import {
  useMediaQuery,
  createTheme,
  PaletteMode,
  CssBaseline
} from '@mui/material';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
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
import useSwitchThemeMode from './shared/hooks/utility/useSwitchThemeMode';
import useUpdateLanguage from './shared/hooks/utility/useUpdateLanguage';
import ProtectedRoute from './shared/components/protected-route/ProtectedRoute';
import { UserIsAuthenticatedState } from './pages/user/store/user.selectors';
import Login from './pages/authentication/components/login/Login';

const getDesignTokens = (mode: PaletteMode) =>
  mode === 'light' ? lightModeTheme : darkModeTheme;

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorMode = useSelector(UIThemeModeState);
  useUpdateLanguage();
  useSwitchThemeMode(prefersDarkMode);
  const isAuthenticated = useSelector(UserIsAuthenticatedState);

  const theme = useMemo(
    () => createTheme(getDesignTokens(colorMode)),
    [colorMode]
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={RouterLinks.HOME}
          element={<ProtectedRoute isAllowed={isAuthenticated} />}
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              redirectPath={RouterLinks.HOME}
              isAllowed={!isAuthenticated}
            />
          }
        >
          <Route path={RouterLinks.SIGNUP} element={<Register />} />
          <Route path={RouterLinks.LOGIN} element={<Login />} />
        </Route>
      </>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
