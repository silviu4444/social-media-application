import { AppState } from '../../../store/index';

export const UserIsAuthenticatedState = (state: AppState) => state.user.isAuthenticated;