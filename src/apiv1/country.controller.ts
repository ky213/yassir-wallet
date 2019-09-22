import { Request, Response } from 'express';
import { create, update } from '../services/country.service';

export const createCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const country = req.body;
  await create(country);
  res.send('Country created succesfully !!');
};
export const updateCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const country = req.body;
  const countryID = req.params.id;
  await update(countryID, country);
  res.send('Country updated succesfully !!');
};
