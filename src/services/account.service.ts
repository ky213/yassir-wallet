import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Account, { CreateAccount } from '../models/account.model';
import Balance from '../models/balance.model';
import PaymentMethod from '../models/paymentMethod.model';

export default class AccountService {
  static createAccount(newAccount: CreateAccount): Promise<InsertResult> {
    return Account.insert(newAccount);
  }

  getAllAccounts(): Promise<Account[]> {
    return Account.find();
  }

  getAccount(id: string): Promise<Account | undefined> {
    return Account.findOne(id);
  }

  async getBalances(id: string): Promise<Balance[]> {
    const account = await Account.findOne(id, { relations: ['balances'] });
    return account.balances;
  }

  async getPaymentMethods(id: string): Promise<PaymentMethod[]> {
    const account = await Account.findOne(id, {
      relations: ['paymentMethods']
    });
    return account.paymentMethods;
  }

  updateAccount(id: string, data: object): Promise<UpdateResult> {
    return Account.update(id, data);
  }

  deleteAccount(id: string): Promise<DeleteResult> {
    return Account.delete(id);
  }
}
