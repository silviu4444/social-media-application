import { PaletteMode } from '@mui/material';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { i18nSupported } from 'src/shared/enums/i18n';

export interface ThemeMode {
  mode: PaletteMode;
  autoSwitch: boolean;
}

export interface UIState {
  themeMode: ThemeMode;
  language: i18nSupported;
}

const initialUIState: UIState = {
  themeMode: { mode: 'light', autoSwitch: true },
  language: i18nSupported.ENGLISH
};

const UISlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    changeColorMode(state, action: PayloadAction<ThemeMode>) {
      state.themeMode.mode = action.payload.mode;
      state.themeMode.autoSwitch = action.payload.autoSwitch;
    },
    changeLanguage(state, action: PayloadAction<i18nSupported>) {
      state.language = action.payload;
    }
  }
});

export const UIActions = UISlice.actions;
export default UISlice;
