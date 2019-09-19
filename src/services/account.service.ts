import { InsertResult } from 'typeorm';
import Account from '../models/account.model';
import AccountDTO from '../apiv1/dtos/AccountDTO';

export const create = (accountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = accountDTO.userID;
  return Account.insert(account);
};
