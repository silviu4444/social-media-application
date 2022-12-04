import DEFAULT_FE_RESPONSE_MESSAGES from '../../../shared/constants/API/DEFAULT_FE_RESPONSES';

const AUTH_FE_RESPONSE_MESSAGES = {
  ...DEFAULT_FE_RESPONSE_MESSAGES,
  USER_CREATED: 'user-created',
  USER_ALREADY_EXISTS: 'user-already-exists',
  WRONG_EMAIL_OR_PASSWORD: 'wrong-email-or-password'
};

export default AUTH_FE_RESPONSE_MESSAGES;
