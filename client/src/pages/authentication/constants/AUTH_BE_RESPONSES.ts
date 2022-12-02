import DEFAULT_BE_RESPONSE_MESSAGES from "src/shared/constants/API/DEFAULT_BE_RESPONSES";

const AUTH_BE_RESPONSE_MESSAGES = {
  ...DEFAULT_BE_RESPONSE_MESSAGES,
  USER_CREATED: 'User created!',
  LOGGED_IN_SUCCESSFULLY: 'User logged in successfully',
  USER_ALREADY_EXISTS: 'This user already exists!',
  PLEASE_PROVIDE_VALID_CREDENTIALS: 'Please provide valid credentials!',
  WRONG_USERNAME_OR_PASSWORD: 'Wrong username or password!'
};

export default AUTH_BE_RESPONSE_MESSAGES;
