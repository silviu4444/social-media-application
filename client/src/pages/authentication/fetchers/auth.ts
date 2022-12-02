import axios from 'axios';

import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';
import { BaseResponse } from '@backend/shared/interfaces/api';
import {
  RegisterFields,
  LoginFields
} from '@backend/controllers/auth/interfaces/auth.interface';

const registerHandler = async ({
  fullName,
  email,
  password
}: RegisterFields) => {
  try {
    const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.SIGNUP}`;
    const { data } = await axios.post<BaseResponse>(url, {
      fullName,
      email,
      password
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message);
  }
};

const loginHandler = async ({ email, password }: LoginFields) => {
  try {
    const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.LOGIN}`;
    const { data } = await axios.post<BaseResponse>(url, {
      email,
      password
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message);
  }
};

const logoutHandler = async () => {
  const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.LOGOUT}`;
  const { data } = await axios.post(url);
  return data;
};

export { registerHandler, logoutHandler, loginHandler };
