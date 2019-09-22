import { Router } from 'express';
import { createAccount, Balances } from '../apiv1/account.controller';
import validationMiddleware from '../middlewares/validators/data.validator';
import AccountDTO from '../apiv1/dtos/AccountDTO';

const route = Router();

route.post('/', validationMiddleware(AccountDTO), createAccount);
route.get('/:id/balances', Balances);

export default route;
