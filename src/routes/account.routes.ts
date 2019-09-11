import { Router, Request, Response } from 'express';
import AccountController from '../controllers/account.controller';
import { checkNewAccountData } from '../helpers/validators/account.validators';

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
  const account = await accountController.getAccountBalances(req.params.id);
  res.send(account);
});

Account.post('/', checkNewAccountData, async (req: Request, res: Response) => {
  const account = await accountController.createAccount(req.body);
  res.send(account);
});

Account.put('/:id', async (req: Request, res: Response) => {
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
