import axios from 'axios';

import { RegisterFields } from '@backend/controllers/auth/interfaces/register.interface';
import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';

const registerHandler = async ({
  fullName,
  email,
  password
}: RegisterFields) => {
  const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.SIGNUP}`;
  const { data } = await axios.post<{ test: string }>(url, {
    fullName,
    email,
    password
  });
  return data;
};

const logoutHandler = async () => {
  const url = `${environment.apiUrl}${API_URLS.AUTHENTICATION.LOGOUT}`;
  const { data } = await axios.get(url);
  return data;
};

export { registerHandler, logoutHandler };
