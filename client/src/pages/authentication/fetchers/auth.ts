import axios from 'axios';

import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';
import { BaseResponse } from '@backend/shared/interfaces/api';
import { RegisterFields } from '@backend/controllers/auth/interfaces/register.interface';

const registerHandler = async ({
  fullName,
  email,
  password
}: RegisterFields) => {
  const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.SIGNUP}`;
  try {
    const { data } = await axios.post<BaseResponse>(url, {
      fullName,
      email,
      password
    });
    return data
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const logoutHandler = async () => {
  const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.LOGOUT}`;
  const { data } = await axios.post(url);
  return data;
};

export { registerHandler, logoutHandler };
