import { Request, Response } from 'express';
import { create, getBalances } from '../services/account.service';

export const createAccount = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const account = req.body;
  await create(account);
  res.status(201).send('Account created succesfully !!');
};

export const Balances = async (req: Request, res: Response) => {
  const result = await getBalances(req.params.id);
  res.send(result);
};
