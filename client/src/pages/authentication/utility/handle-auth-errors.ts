import { AxiosError } from 'axios';

import { BaseResponse } from '@backend/shared/interfaces/api';
import DEFAULT_FE_RESPONSE_MESSAGES from 'src/shared/constants/API/DEFAULT_FE_RESPONSES';
import AUTH_BE_RESPONSE_MESSAGES from '../constants/AUTH_BE_RESPONSES';
import AUTH_FE_RESPONSE_MESSAGES from '../constants/AUTH_FE_RESPONSES';
import { InputErrorHandlerWithFocus } from 'src/shared/interfaces/input-error-handler';

export const handleAuthErrors = (errorResponse: AxiosError<BaseResponse>) => {
  let errorHandler: InputErrorHandlerWithFocus = {
    inputName: null,
    errorKeyMessage: DEFAULT_FE_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG
  };

  switch (errorResponse.response.data.message) {
    case AUTH_BE_RESPONSE_MESSAGES.USER_ALREADY_EXISTS:
      errorHandler = {
        inputName: 'email',
        errorKeyMessage: AUTH_FE_RESPONSE_MESSAGES.USER_ALREADY_EXISTS
      };
  }

  return errorHandler;
};
