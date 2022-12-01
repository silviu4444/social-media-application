import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeMode, UIActions } from 'src/store/UI/ui';
import { UIThemeState } from 'src/store/UI/ui.selectors';

const useSwitchThemeMode = (prefersDarkMode: boolean) => {
  const themeState = useSelector(UIThemeState);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedThemeState: ThemeMode = {
      mode: prefersDarkMode ? 'dark' : 'light',
      autoSwitch: true
    };
    themeState.autoSwitch && dispatch(UIActions.changeColorMode(updatedThemeState));
  }, [prefersDarkMode, dispatch, themeState.autoSwitch]);
};

export default useSwitchThemeMode;
