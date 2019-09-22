import { Request, Response } from 'express';
import { create, update, remove, findAll } from '../services/country.service';

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

export const removeCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const countryID = req.params.id;
  await remove(countryID);
  res.send('Country has beed removed successfully');
};

export const findAllCountries = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const countries = await findAll();
  res.send(countries);
};
