import { Router, Request, Response } from 'express';
import { createAccount } from '../apiv1/account.controller';
import validationMiddleware from '../middlewares/validators/data.validator';
import AccountDTO from '../apiv1/dtos/AccountDTO'

const route = Router();

route.post('/', validationMiddleware(AccountDTO), createAccount);

export default route;
