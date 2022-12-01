import DEFAULT_BE_RESPONSE_MESSAGES from "src/shared/constants/API/DEFAULT_BE_RESPONSES";

const AUTH_BE_RESPONSE_MESSAGES = {
  ...DEFAULT_BE_RESPONSE_MESSAGES,
  USER_CREATED: 'User created!',
  USER_ALREADY_EXISTS: 'This user already exists!'
};

export default AUTH_BE_RESPONSE_MESSAGES;
