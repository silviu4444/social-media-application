import { AppState } from './index';

export const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (_) {
    return undefined;
  }
};

export const saveState = (state: AppState) => {
  try {
    const newState = JSON.stringify(state);
    localStorage.setItem('state', newState);
  } catch (_) {}
};
