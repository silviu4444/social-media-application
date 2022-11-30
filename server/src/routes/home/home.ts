import { Router } from 'express';

import * as homeController from '../../controllers/home';
import { routesUrls } from '../../shared/constants/routes';

const homeRouter = Router();

homeRouter.get(routesUrls.HOME.MAIN_PAGE, homeController.getHome);

export { homeRouter };
