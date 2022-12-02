import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import AUTH_RESPONSE_MESSAGES from './constants/auth-responses';
import User from '../../models/user';
import { BaseResponse } from './../../shared/interfaces/api';
import { LoginFields, RegisterFields } from './interfaces/auth.interface';
import { IUser } from '../../models/user/interfaces/user';
import {
  checkLoginFields,
  checkRegisterFields,
} from './validators/auth-validators';

const postLogout = (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy(() => {
    const response: BaseResponse = {
      message: AUTH_RESPONSE_MESSAGES.UNAUTHENTICATED,
    };
    res.status(401).json(response);
  });
};

const postLogin = (req: Request<{}, {}, LoginFields>, res: Response) => {
  const { email, password } = req.body;
  const checkedCredentialsMessage = checkLoginFields({ email, password });
  if (checkedCredentialsMessage)
    return res.status(400).json({ message: checkedCredentialsMessage });

  User.findOne({ email }).then((user) => {
    if (!user) {
      const message: BaseResponse = {
        message: AUTH_RESPONSE_MESSAGES.WRONG_USERNAME_OR_PASSWORD,
      };
      return res.status(400).json(message);
    }

    bcrypt
      .compare(password, user.password)
      .then((doMatch: boolean) => {
        if (doMatch) {
          req.session.user = user;
          return req.session.save(() => {
            const message: BaseResponse = {
              message: AUTH_RESPONSE_MESSAGES.LOGGED_IN_SUCCESSFULLY,
            };
            return res.status(200).json(message);
          });
        }
        const message: BaseResponse = {
          message: AUTH_RESPONSE_MESSAGES.WRONG_USERNAME_OR_PASSWORD,
        };
        res.status(400).json(message);
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/login');
      });
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
    return res.status(400).json({ message: checkedCredentialsMessage });

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

export { postSignup, postLogout, postLogin };
