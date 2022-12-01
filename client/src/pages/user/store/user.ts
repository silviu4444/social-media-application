import { logout } from './user.actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isAuthenticated: boolean;
}

const initialUserState: UserState = {
  isAuthenticated: false
};

const UserSlice = createSlice({
  name: 'ui',
  initialState: initialUserState,
  reducers: {
    userSignOut(state) {
      state.isAuthenticated = false;
    },
    userSignIn(state) {
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
    });
  }
});

export const UserActions = UserSlice.actions;
export default UserSlice;
