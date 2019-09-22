import { Request, Response } from 'express';
import { create } from '../services/account.service';

export const createAccount = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const account = req.body;
  await create(account);
  res.status(201).send('Account created succesfully !!');
};
