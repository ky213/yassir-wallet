import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Account, { CreateAccount } from '../models/account.model';
import Balance from '../models/balance.model';
import PaymentMethod from '../models/paymentMethod.model';
import AccountDTO from '../apiv1/dtos/AccountDTO';

export const create = (AccountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = AccountDTO.userID;
  return Account.insert(account);
};

export const update = (AccountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = AccountDTO.userID;
  return Account.insert(account);
};

export const isCreated = (AccountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = AccountDTO.userID;
  return Account.insert(account);
};
