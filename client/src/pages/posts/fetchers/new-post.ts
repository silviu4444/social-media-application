import { NewPostFields } from '@backend/models/post/interfaces/post';
import axios from 'axios';
import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';

const addNewPost = async ({ description, base64Img }: NewPostFields) => {
  try {
    const url = `${environment.apiUrl}${API_URLS.POSTS.ADD_NEW_POST}`;
    const { data } = await axios.post(url, { description, base64Img });
    return data;
  } catch (error) {
    throw new Error(error.response?.data.message);
  }
};

export { addNewPost };
