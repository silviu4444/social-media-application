import { Request, Response } from 'express';
import Post from '../../models/post';
import { NewPostFields } from '../../models/post/interfaces/post';
import { BaseResponse } from '../../shared/interfaces/api';
import POST_RESPONSE_MESSAGES from './constants/post.responses';

const postAddNewPost = (req: Request<{}, {}, NewPostFields>, res: Response) => {
  const { description } = req.body;
  const User = req.session.user;

  const post = new Post({ description, userId: User });
  post
    .save()
    .then((post) => {
      return User.addNewPost(post).then(async (_) => {
        const message: BaseResponse = {
          message: POST_RESPONSE_MESSAGES.POST_CREATED
        };
        res.status(200).json(message);
      });
    })
    .catch((error) => {
      const message: BaseResponse = {
        message: POST_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG
      };
      res.status(500).json(message);
    });
};

export { postAddNewPost };
