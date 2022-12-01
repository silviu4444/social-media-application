import DEFAULT_RESPONSE_MESSAGES from "../../shared/constants/response-messages";

const AUTH_RESPONSE_MESSAGES = {
  ...DEFAULT_RESPONSE_MESSAGES,
  USER_CREATED: 'User created!',
  USER_ALREADY_EXISTS: 'This user already exists!',
  PLEASE_PROVIDE_VALID_CREDENTIALS: 'Please provide valid credentials!'
};

export default AUTH_RESPONSE_MESSAGES;
