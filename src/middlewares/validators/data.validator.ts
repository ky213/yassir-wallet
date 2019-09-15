/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import Account from '../../models/account.model';
import Balance from '../../models/balance.model';
import Country from '../../models/country.model';
import PaymentMethod from '../../models/paymentMethod.model';

// eslint-disable-next-line consistent-return
export const getEntity = (url: string) => {
  if (url.includes('account')) return Account;
  if (url.includes('balance')) return Balance;
  if (url.includes('country')) return Country;
  if (url.includes('paymentMethod')) return PaymentMethod;
};

export const checkNewData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Entity = getEntity(req.originalUrl);
  const validationModel = new Entity();

  if (req.method === 'PUT') {
    const target = await Entity.findOne(req.params.id);

    for (const key in target) {
      validationModel[key] = target[key];
    }
  }

  for (const key in req.body) {
    validationModel[key] = req.body[key];
  }
  const errors = await validate(validationModel);

  if (errors.length > 0)
    throw {
      status: 400,
      source: req.originalUrl,
      type: 'data validation',
      content: errors
    };
  else next();
};
