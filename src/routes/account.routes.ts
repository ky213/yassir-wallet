import { Router, Request, Response } from 'express';
import AccountController from '../controllers/account.controller';
import { checkNewData } from '../middlewares/validators/data.validator';

const accountController = new AccountController();
const Account = Router();

Account.get('/all', async (req: Request, res: Response) => {
  const account = await accountController.getAllAccounts();
  res.send(account);
});

Account.get('/:id', async (req: Request, res: Response) => {
  const account = await accountController.getAccount(req.params.id);
  res.send(account);
});

Account.get('/:id/balances', async (req: Request, res: Response) => {
  const balances = await accountController.getBalances(req.params.id);
  res.send(balances);
});

Account.get('/:id/paymentMethods', async (req: Request, res: Response) => {
  const paymentMethods = await accountController.getPaymentMethods(
    req.params.id
  );
  res.send(paymentMethods);
});

Account.post('/', checkNewData, async (req: Request, res: Response) => {
  const newAccount = await accountController.createAccount(req.body);
  res.send(newAccount);
});

Account.put('/:id', checkNewData, async (req: Request, res: Response) => {
  const updateResult = await accountController.updateAccount(
    req.params.id,
    req.body
  );
  res.send(updateResult);
});

Account.delete('/:id', (req: Request, res: Response) => {
  const deleteResult = accountController.deleteAccount(req.params.id);
  res.send(deleteResult);
});

export default Account;
