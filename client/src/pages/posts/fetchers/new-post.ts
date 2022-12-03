import { NewPostFields } from '@backend/models/post/interfaces/post';
import axios from 'axios';
import environment from 'src/environment/environment';
import { API_URLS } from 'src/shared/constants/API/api-urls';

const addNewPost = async ({ description }: NewPostFields) => {
  try {
    const url = `${environment.apiUrl}${API_URLS.POSTS.ADD_NEW_POST}`;
    const { data } = await axios.post(url, { description });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { addNewPost };
