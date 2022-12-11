const apisPrefix = 'api';

export const API_URLS = {
  HOME: {
    MAIN_PAGE: apisPrefix + '/home'
  },
  AUTHENTICATION: {
    SIGNUP: apisPrefix + '/signup',
    LOGIN: apisPrefix + '/login',
    LOGOUT: apisPrefix + '/logout'
  },
  POSTS: {
    ADD_NEW_POST: apisPrefix + '/add-new-post'
  },
  USER: {
    GET_ALL_POSTS: apisPrefix + '/get-all-posts'
  }
};
