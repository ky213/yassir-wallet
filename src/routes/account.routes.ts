import { Router, Request, Response } from 'express';
import AccountController from '../controllers/account.controller';

const Account = Router();

Account.get('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const account = await AccountController.getAccount(req.params.id);
    res.send(account);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Account.post('/', async (req: Request, res: Response, next: Function) => {
  try {
    const account = await AccountController.createAccount(req.body);
    res.send(account);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Account.put('/:id', async (req: Request, res: Response, next: Function) => {
  try {
    const updateResult = await AccountController.updateAccount(
      req.params.id,
      req.body
    );
    res.send(updateResult);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

Account.delete('/:id', (req: Request, res: Response, next: Function) => {
  try {
    const deleteResult = AccountController.deleteAccount(req.params.id);
    res.send(deleteResult);
  } catch (error) {
    res.statusCode = 400;
    next(error);
  }
});

export default Account;
