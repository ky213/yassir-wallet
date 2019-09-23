import { Router } from 'express';
import { createAccount, Balance } from '../apiv1/account.controller';
import validationMiddleware from '../middlewares/validators/data.validator';
import AccountDTO from '../apiv1/dtos/AccountDTO';

const route = Router();

route.post('/', validationMiddleware(AccountDTO), createAccount);
route.get('/:accountId/:countryId/balances', Balance);

export default route;
