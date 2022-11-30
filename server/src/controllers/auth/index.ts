import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import AUTH_RESPONSE_MESSAGES from './constants/auth-responses';
import User from '../../models/user';
import { BaseResponse } from './../../shared/interfaces/api';
import { RegisterFields } from './interfaces/register.interface';
import { IUser } from '../../models/user/interfaces/user';

const postSignup = (req: Request<{}, {}, RegisterFields>, res: Response) => {
  const { fullName, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      const response: BaseResponse = {
        message: AUTH_RESPONSE_MESSAGES.USER_ALREADY_EXISTS,
      };
      return res.status(403).json(response);
    }

    const errorMessage: BaseResponse = {
      message: AUTH_RESPONSE_MESSAGES.SOMETHING_WENT_WRONG,
    };

    bcrypt
      .hash(password, 12)
      .then((hashedPassword: string) => {
        const user = new User({
          fullName,
          email,
          password: hashedPassword,
        });
        return user.save();
      })
      .then((createdUser: IUser) => {
        req.session.user = createdUser;
        return req.session.save((err) => {
          if (err) return res.status(500).json(errorMessage);
          const message: BaseResponse = {
            message: AUTH_RESPONSE_MESSAGES.USER_CREATED,
          };
          res.status(201).json(message);
        });
      })
      .catch((_) => {
        res.status(500).json(errorMessage);
      });
  });
};

export { postSignup };
