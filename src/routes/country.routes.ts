import { Router } from 'express';
import validationMiddleware from '../middlewares/validators/data.validator';
import {
  createCountry,
  updateCountry,
  removeCountry,
  findAllCountries,
} from '../apiv1/country.controller';
import CountryDTO from '../apiv1/dtos/CountryDTO';

const route = Router();

route.post('/', validationMiddleware(CountryDTO), createCountry);
route.put('/:id', validationMiddleware(CountryDTO), updateCountry);
route.delete('/:id', removeCountry);
route.get('/', findAllCountries);

export default route;
