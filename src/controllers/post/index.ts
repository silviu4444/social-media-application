import { Request, Response } from 'express';

import { NewPostFields } from '../../models/post/interfaces/post';
import { BaseResponse } from '../../shared/interfaces/api';
import { addNewPost, storeImageAndAddNewPost } from '../home/helpers/helpers';
import POST_RESPONSE_MESSAGES from './constants/post.responses';

const postAddNewPost = async (
  req: Request<{}, {}, NewPostFields>,
  res: Response
) => {
  const { description, base64Img } = req.body;

  const User = req.session.user;

  const successMessage: BaseResponse = {
    message: POST_RESPONSE_MESSAGES.POST_CREATED
  };

  if (base64Img) {
    try {
      await storeImageAndAddNewPost(base64Img, description, User);
      res.status(200).json(successMessage);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  } else {
    try {
      await addNewPost(description, User);
      res.status(200).json(successMessage);
    } catch ({ message }) {
      return res.status(500).json({ message });
    }
  }
};

export { postAddNewPost };
