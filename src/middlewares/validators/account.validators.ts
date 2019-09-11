/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { validateOrReject } from 'class-validator';
import { Request, Response } from 'express';
import Account from '../../models/account.model';

// eslint-disable-next-line import/prefer-default-export
export const checkNewAccountData = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const newAccount = new Account();

  for (const key in req.body) {
    newAccount[key] = req.body[key];
  }

  await validateOrReject(newAccount);
};
