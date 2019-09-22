import { Request, Response } from 'express';
import { create, getBalances } from '../services/account.service';

export const createAccount = async (req: Request, res: Response) => {
  const account = req.body;
  create(account);
  res.send('Ok');
};

export const Balances = async (req: Request, res: Response) => {
  const result = await getBalances(req.params.id);
  res.send(result);
};
