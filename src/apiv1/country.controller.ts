import { Request, Response } from 'express';
import { create, update, remove, findAll } from '../services/country.service';

export const createCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const country = req.body;
  const createdCountry = await create(country);
  res.status(201).send(createdCountry);
};
export const updateCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const country = req.body;
  const countryID = req.params.id;
  const updatedCountry = await update(countryID, country);
  res.status(201).send(updatedCountry);
};

export const removeCountry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const countryID = req.params.id;
  const removedCountry = await remove(countryID);
  res.status(201).send(removedCountry);
};

export const findAllCountries = async (res: Response): Promise<void> => {
  const countries = await findAll();
  res.status(201).send(countries);
};
