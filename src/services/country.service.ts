import { InsertResult, UpdateResult } from 'typeorm';
import Country from '../models/country.model';
import CountryDTO from '../apiv1/dtos/CountryDTO';

export const create = (countryDTO: CountryDTO): Promise<InsertResult> => {
  const country: Country = new Country();
  country.name = countryDTO.name;
  country.code = countryDTO.code;
  country.currency = countryDTO.currency;
  country.symbol = countryDTO.symbol;
  return Country.insert(country);
};

export const update = (
  countryID: string,
  countryDTO: CountryDTO,
): Promise<UpdateResult> => {
  return Country.update(countryID, countryDTO);
};
