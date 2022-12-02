import DEFAULT_RESPONSE_MESSAGES from "../../shared/constants/response-messages";

const AUTH_RESPONSE_MESSAGES = {
  ...DEFAULT_RESPONSE_MESSAGES,
  USER_CREATED: 'User created!',
  LOGGED_IN_SUCCESSFULLY: 'User logged in successfully',
  USER_ALREADY_EXISTS: 'This user already exists!',
  PLEASE_PROVIDE_VALID_CREDENTIALS: 'Please provide valid credentials!',
  WRONG_USERNAME_OR_PASSWORD: 'Wrong username or password!'
};

export default AUTH_RESPONSE_MESSAGES;
