import axios from 'axios';

import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';

const getAllPosts = async () => {
  try {
    const url = `${environment.apiUrl}${API_URLS.USER.GET_ALL_POSTS}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message);
  }
};

export { getAllPosts };
