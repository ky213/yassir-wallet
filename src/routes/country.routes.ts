import { Router } from 'express';
import validationMiddleware from '../middlewares/validators/data.validator';
import { createCountry, updateCountry } from '../apiv1/country.controller';
import CountryDTO from '../apiv1/dtos/CountryDTO';

const route = Router();

route.post('/', validationMiddleware(CountryDTO), createCountry);
route.put('/:id', validationMiddleware(CountryDTO), updateCountry);

export default route;
