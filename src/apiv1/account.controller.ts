import { Request, Response } from 'express';
import { create } from '../services/account.service';

export const createAccount = (req: Request, res: Response): void => {
  const account = req.body;
  create(account);
  res.send('Ok');
};
