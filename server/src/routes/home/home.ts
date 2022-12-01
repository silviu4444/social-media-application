import { Router } from 'express';

import * as homeController from '../../controllers/home';
import { isAuth } from '../../middlewares/auth';
import { routesUrls } from '../../shared/constants/routes';

const homeRouter = Router();

homeRouter.get(routesUrls.HOME.MAIN_PAGE, isAuth, homeController.getHome);

export { homeRouter };
