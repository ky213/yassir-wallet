import { Express } from 'express';
import accountRouter from './account.routes';
import countryRouter from './country.routes';

const URL_PREFIX_V1 = '/api/v1';
const URL_PREFIX = URL_PREFIX_V1;

export default (app: Express): void => {
  app.use(`${URL_PREFIX}/account`, accountRouter);
  app.use(`${URL_PREFIX}/country`, countryRouter);
};
