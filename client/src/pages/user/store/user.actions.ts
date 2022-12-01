import { createAsyncThunk } from '@reduxjs/toolkit';

import { logoutHandler } from 'src/pages/authentication/fetchers/auth';

enum actionTypes {
  USER_LOGOUT = '[User] Logout action'
}

export const logout = createAsyncThunk(actionTypes.USER_LOGOUT, logoutHandler);
