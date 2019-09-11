/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { validateOrReject } from 'class-validator';
import { Request, Response } from 'express';
import Currency from '../../models/currency.model';

// eslint-disable-next-line import/prefer-default-export
export const checkNewCurrencyData = async (
  req: Request,
  res: Response,
  next: Function
) => {
  const newCurrency = new Currency();

  for (const key in req.body) {
    newCurrency[key] = req.body[key];
  }

  await validateOrReject(newCurrency);
};
