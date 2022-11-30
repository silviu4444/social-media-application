import { Request, Response, NextFunction } from 'express';

import DEFAULT_RESPONSE_MESSAGES from '../controllers/shared/constants/response-messages';
import { BaseResponse } from '../shared/interfaces/api';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) {
    const message: BaseResponse = {
      message: DEFAULT_RESPONSE_MESSAGES.UNAUTHENTICATED,
    };
    return res.status(403).json(message);
  }
  next();
};
