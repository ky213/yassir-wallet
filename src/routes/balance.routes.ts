import { Router, Request, Response } from 'express';
import BalanceController from '../controllers/balance.controller';

const Balance: Router = Router();

Balance.get('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const balance = await BalanceController.getBalance(req.params.id);
    res.send(balance);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Balance.post('/', async (req: Request, res: Response, next: Function) => {
  try {
    const balance = await BalanceController.createBalance(req.body);
    res.send(balance);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Balance.put('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const balance = await BalanceController.updateBalance(
      req.params.id,
      req.body
    );
    res.send(balance);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Balance.delete('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const deleteResult = await BalanceController.deleteBalance(req.params.id);
    res.send(deleteResult);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

export default Balance;
