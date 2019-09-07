import { Router, Request, Response } from 'express';
import CurrencyController from '../controllers/currency.controller';

const Currency: Router = Router();

Currency.get('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const currency = await CurrencyController.getCurrency(req.params.id);
    res.send(currency);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Currency.post('/', async (req: Request, res: Response, next: Function) => {
  try {
    const currency = await CurrencyController.createCurrency(req.body);

    res.send(currency);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Currency.put('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const updateResult = await CurrencyController.updateCurrency(
      req.params.id,
      req.body
    );

    res.send(updateResult);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Currency.delete('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const deleteResult = await CurrencyController.deleteCurrency(req.params.id);
    res.send(deleteResult);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

export default Currency;
