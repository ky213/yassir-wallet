import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Account from '../models/account.model';
import { CreateAccount } from '../controllers/account.controller';
import Balance from '../models/balance.model';

export default class AccountService {
  createAccount(newAccount: CreateAccount): Promise<InsertResult> {
    return Account.insert(newAccount);
  }

  getAllAccounts(): Promise<Account[]> {
    return Account.find();
  }

  getAccount(id: string): Promise<Account | undefined> {
    return Account.findOne(id);
  }

  async getAccountBalances(id: string): Promise<Balance[]> {
    const account = await Account.findOne(id, { relations: ['balances'] });
    return account.balances;
  }

  updateAccount(id: string, info: object): Promise<UpdateResult> {
    return Account.update(id, info);
  }

  deleteAccount(id: string): Promise<DeleteResult> {
    return Account.delete(id);
  }
}
