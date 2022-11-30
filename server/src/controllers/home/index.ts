import { Request, Response } from 'express';

const getHome = (req: Request, res: Response) => {
  res.status(200).json({ message: 'OK' });
};

export { getHome };
