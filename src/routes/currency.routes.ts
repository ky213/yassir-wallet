import { Router, Request, Response } from 'express';
import CurrencyController from '../controllers/currency.controller';
import { checkNewCurrencyData } from '../middlewares/validators/currency.validators';

const currencyController = new CurrencyController();
const Currency: Router = Router();

Currency.get('/all', async (req: Request, res: Response) => {
  const currency = await currencyController.getAllCurrencies();
  res.send(currency);
});
Currency.get('/:id', async (req: Request, res: Response) => {
  const currency = await currencyController.getCurrency(req.params.id);
  res.send(currency);
});

Currency.post(
  '/',
  checkNewCurrencyData,
  async (req: Request, res: Response) => {
    const currency = await currencyController.createCurrency(req.body);
    res.send(currency);
  }
);

Currency.put('/:id', async (req: Request, res: Response) => {
  const updateResult = await currencyController.updateCurrency(
    req.params.id,
    req.body
  );

  res.send(updateResult);
});

Currency.delete('/:id', async (req: Request, res: Response) => {
  const deleteResult = await currencyController.deleteCurrency(req.params.id);
  res.send(deleteResult);
});

export default Currency;
