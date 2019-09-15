import { Router, Request, Response } from 'express';
import CountryController from '../controllers/country.controller';
import { checkNewData } from '../middlewares/validators/data.validator';

const countryController = new CountryController();
const Country: Router = Router();

Country.get('/all', async (req: Request, res: Response) => {
  const country = await countryController.getAllCurrencies();
  res.send(country);
});

Country.get('/:id', async (req: Request, res: Response) => {
  const country = await countryController.getCountry(req.params.id);
  res.send(country);
});

Country.get('/:id/paymentMethods', async (req: Request, res: Response) => {
  const paymentMethods = await countryController.getPaymentMethods(
    req.params.id
  );
  res.send(paymentMethods);
});

Country.post(
  '/',
  checkNewData,
  async (req: Request, res: Response, next: Function) => {
    try {
      const country = await countryController.createCountry(req.body);
      res.send(country);
    } catch ({ code, message, detail }) {
      next({
        status: 400,
        source: 'country',
        type: 'database error',
        content: { code, message, detail }
      });
    }
  }
);

Country.put('/:id', checkNewData, async (req: Request, res: Response) => {
  const updateResult = await countryController.updateCountry(
    req.params.id,
    req.body
  );

  res.send(updateResult);
});

Country.delete('/:id', async (req: Request, res: Response) => {
  const deleteResult = await countryController.deleteCountry(req.params.id);
  res.send(deleteResult);
});

export default Country;
