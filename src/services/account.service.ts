import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Account from '../models/account.model';

export default class AccountService {
  static createAccount(account: Account): Promise<InsertResult> {
    return Account.insert(account);
  }

  static getAccount(id: string): Promise<Account | undefined> {
    return Account.findOne(id);
  }

  static updateAccount(id: string, info: object): Promise<UpdateResult> {
    return Account.update(id, info);
  }

  static deleteAccount(id: string): Promise<DeleteResult> {
    return Account.delete(id);
  }
}
