import { InsertResult } from 'typeorm';
import Account from '../models/account.model';
import AccountDTO from '../apiv1/dtos/AccountDTO';
import Balance from '../models/balance.model';

export const create = (accountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = accountDTO.userID;
  return Account.insert(account);
};

export const update = (accountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = accountDTO.userID;
  return Account.insert(account);
};

export const isCreated = (accountDTO: AccountDTO): Promise<InsertResult> => {
  const account: Account = new Account();
  account.userId = accountDTO.userID;
  return Account.insert(account);
};

export const getBalances = async (id: string): Promise<Balance[] | string> => {
  const account = await Account.findOne(id, {
    relations: ['balances'],
  });
  if (account) return Promise.resolve(account.balances);
  return Promise.resolve('user not found');
};
