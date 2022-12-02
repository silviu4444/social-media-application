import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import AUTH_RESPONSE_MESSAGES from './constants/auth-responses';
import User from '../../models/user';
import { BaseResponse } from './../../shared/interfaces/api';
import { RegisterFields } from './interfaces/register.interface';
import { IUser } from '../../models/user/interfaces/user';
import { checkRegisterFields } from './validators/auth-validators';

const postLogout = (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {
    const response: BaseResponse = {
      message: AUTH_RESPONSE_MESSAGES.UNAUTHENTICATED,
    };
    res.status(401).send(response);
  });
};

const postSignup = (req: Request<{}, {}, RegisterFields>, res: Response) => {
  const { fullName, email, password } = req.body;
  const checkedCredentialsMessage = checkRegisterFields({
    email,
    password,
    fullName,
  });

  if (checkedCredentialsMessage)
    return res.send({ message: checkedCredentialsMessage });

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
          fullName: fullName.trim(),
          email: email.trim(),
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

export { postSignup, postLogout };
