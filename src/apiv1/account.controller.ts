import { Request, Response } from 'express';
import { create } from '../services/account.service';

export const createAccount = async (req: Request, res: Response) => {
  const account = req.body;
  create(account);
  res.send('Ok');
};
