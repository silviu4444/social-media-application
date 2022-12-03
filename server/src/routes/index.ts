import { Router } from 'express';

import sessionRouter from './session/session';
import { authRouter } from './auth/auth';
import { homeRouter } from './home/home';
import { postRouter } from './post/post';

export const routes = Router();

// THIS ONE BELOW HAS TO BE FIRST!
routes.use(sessionRouter);

routes.use(authRouter);

routes.use(homeRouter);

routes.use(postRouter);
