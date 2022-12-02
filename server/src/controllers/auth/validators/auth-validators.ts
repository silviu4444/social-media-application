import { LoginFields } from './../interfaces/auth.interface';
import AUTH_RESPONSE_MESSAGES from '../constants/auth-responses';
import { RegisterFields } from '../interfaces/auth.interface';
export const emailValidityPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const minLengthPassword = 8;

export const maxLengthPassword = 30;

export const minLengthName = 3;

export const maxLengthName = 20;

export const checkRegisterFields = ({
  email,
  fullName,
  password,
}: Partial<RegisterFields>): string => {
  const fullNameLength = fullName.length;
  const passwordLength = password.length;

  const hasAtLeastOneInvalidField =
    !email ||
    !fullName ||
    !fullName.trim() ||
    !password ||
    !emailValidityPattern.test(email) ||
    fullNameLength < minLengthName ||
    fullNameLength > maxLengthName ||
    passwordLength < minLengthPassword ||
    passwordLength > maxLengthPassword;

  if (hasAtLeastOneInvalidField) {
    return AUTH_RESPONSE_MESSAGES.PLEASE_PROVIDE_VALID_CREDENTIALS;
  }
  return null;
};

export const checkLoginFields = ({ email, password }: LoginFields) => {
  const passwordLength = password.length;

  const hasAtLeastOneInvalidField =
    !email ||
    !password ||
    !emailValidityPattern.test(email) ||
    passwordLength < minLengthPassword ||
    passwordLength > maxLengthPassword;

  if (hasAtLeastOneInvalidField) {
    return AUTH_RESPONSE_MESSAGES.PLEASE_PROVIDE_VALID_CREDENTIALS;
  }

  return null;
};
