import { AppState } from '../index';

export const UIState = (state: AppState) => state.UI;

export const UILanguageState = (state: AppState) => state.UI.language;

export const UIThemeState = (state: AppState) => state.UI.themeMode;

export const UIThemeModeState = (state: AppState) => state.UI.themeMode.mode;
