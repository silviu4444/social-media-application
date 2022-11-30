import { Router } from 'express';

import * as authController from '../../controllers/auth';
import { routesUrls } from '../../shared/constants/routes';

const authRouter = Router();

authRouter.post(routesUrls.AUTHENTICATION.SIGNUP, authController.postSignup);

export { authRouter };
