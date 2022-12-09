import { Router } from 'express';

import * as authController from '../../controllers/auth';
import { routesUrls } from '../../shared/constants/routes';

const authRouter = Router();

authRouter.post(routesUrls.AUTHENTICATION.SIGNUP, authController.postSignup);

authRouter.post(routesUrls.AUTHENTICATION.LOGIN, authController.postLogin);

authRouter.post(routesUrls.AUTHENTICATION.LOGOUT, authController.postLogout);

export { authRouter };
