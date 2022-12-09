import { Request, Response } from 'express';

import User from '../../models/user';
import { BaseResponse } from '../../shared/interfaces/api';
import DEFAULT_RESPONSE_MESSAGES from '../shared/constants/response-messages';
import { PROFILE_RESPONSE_MESSAGES } from './constants/profile-responses';
import { getProfilePostsResponse } from './interfaces/profile';

const getUserPosts = async (
  req: Request,
  res: Response<getProfilePostsResponse | BaseResponse>
) => {
  const userId = req.session.user._id;

  try {
    const posts = await User.getAllPosts(userId);
    res.status(200).json({
      message: PROFILE_RESPONSE_MESSAGES.POSTS_SUCCESSFULLY_SENT,
      posts
    });
  } catch (_) {
    res
      .status(500)
      .json({ message: DEFAULT_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG });
  }
};

export { getUserPosts };
