import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import UISlice, { UIState } from './UI/ui';
import { loadState, saveState } from './localStorage';
import UserSlice, { UserState } from 'src/pages/user/store/user';
import environment from 'src/environment/environment';

export interface AppState {
  UI: UIState;
  user: UserState;
}

const combinedReducer = combineReducers({
  UI: UISlice.reducer,
  user: UserSlice.reducer
});

const rootReducer = (state: AppState, action: Action) => {
  if (action.type === 'user/userSignOut') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    environment.env === 'development'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  reducer: rootReducer,
  preloadedState: loadState()
});

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState(state);
  }, 1000)
);

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
