import { Request, Response } from 'express';
import { create, getCountryBalance } from '../services/account.service';

export const createAccount = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const account = req.body;
  await create(account);
  res.status(201).send('Account created succesfully !!');
};

export const Balance = async (req: Request, res: Response) => {
  const result = await getCountryBalance(
    req.params.accountId,
    req.params.countryId,
  );
  res.send(result);
};
