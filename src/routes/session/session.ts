import { Request, Response, Router, NextFunction } from 'express';
import expressSession from 'express-session';
import mongoDBsession from 'connect-mongodb-session';

import { IUser } from './../../models/user/interfaces/user';
import environment from '../../../environment';
import User from '../../models/user';
import { BaseResponse } from '../../shared/interfaces/api';
import DEFAULT_RESPONSE_MESSAGES from '../../controllers/shared/constants/response-messages';

const MongoDBStore = mongoDBsession(expressSession);

const sessionRouter = Router();

declare module 'express-session' {
  export interface SessionData {
    user: IUser;
  }
}

const store = new MongoDBStore({
  uri: environment.MONGODB_URI,
  collection: 'sessions',
});

sessionRouter.use(
  expressSession({
    secret: environment.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
  }),
);

sessionRouter.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) {
    return next();
  }

  User.findById(req.session.user._id)
    .then((user) => {
      req.session.user = user;
      next();
    })
    .catch((err) => {
      const message: BaseResponse = {
        message:
          DEFAULT_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG_IN_SETTING_THE_SESSION,
      };
      res.status(500).json(message);
    });
});

export default sessionRouter;
