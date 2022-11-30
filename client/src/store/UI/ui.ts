import { createSlice } from '@reduxjs/toolkit';
import { i18nSupported } from 'src/shared/enums/i18n';

export interface UIState {
  app_language: i18nSupported;
}

const initialState: UIState = {
  app_language: i18nSupported.ENGLISH
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {}
});

export const UIActions = UISlice.actions;
export default UISlice;
