import { Router } from 'express';

import * as postController from '../../controllers/post';
import { isAuth } from '../../middlewares/auth';
import { routesUrls } from '../../shared/constants/routes';

const postRouter = Router();

postRouter.post(
  routesUrls.POSTS.ADD_NEW_POST,
  isAuth,
  postController.postAddNewPost
);

export { postRouter };
