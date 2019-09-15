import { Router, Request, Response } from 'express';
import BalanceController from '../controllers/balance.controller';
import { checkNewData } from '../middlewares/validators/data.validator';

const balanceController = new BalanceController();
const Balance: Router = Router();

Balance.get('/all', async (req: Request, res: Response) => {
  const balance = await balanceController.getAllBalances();
  res.send(balance);
});

Balance.get('/:id', async (req: Request, res: Response) => {
  const balance = await balanceController.getBalance(req.params.id);
  res.send(balance);
});

Balance.post('/', checkNewData, async (req: Request, res: Response) => {
  const balance = await balanceController.createBalance(req.body);
  res.send(balance);
});

Balance.put('/:id', checkNewData, async (req: Request, res: Response) => {
  const balance = await balanceController.updateBalance(
    req.params.id,
    req.body
  );
  res.send(balance);
});

Balance.delete('/:id', async (req: Request, res: Response) => {
  const deleteResult = await balanceController.deleteBalance(req.params.id);
  res.send(deleteResult);
});

export default Balance;
