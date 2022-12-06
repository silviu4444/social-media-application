import { Router } from 'express';

import * as profileController from '../../controllers/profile';
import { isAuth } from '../../middlewares/auth';
import { routesUrls } from '../../shared/constants/routes';

const profileRouter = Router();

profileRouter.get(
  routesUrls.USER.GET_ALL_POSTS,
  isAuth,
  profileController.getUserPosts
);

export { profileRouter };
