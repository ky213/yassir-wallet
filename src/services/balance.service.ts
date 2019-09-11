import { DeleteResult, InsertResult } from 'typeorm';
import Balance, { CreateBalance, UpdateBalance } from '../models/balance.model';
import Currency from '../models/currency.model';
import Account from '../models/account.model';

export default class BalanceService {
  async createBalance(newBalance: CreateBalance): Promise<InsertResult> {
    const account = await Account.findOne(newBalance.account.id, {
      relations: ['balances']
    });
    const currency = await Currency.findOne(newBalance.currency.id, {
      relations: ['balances']
    });
    const balance = await Balance.insert(newBalance);

    account.balances.push(balance.raw[0]);
    currency.balances.push(balance.raw[0]);
    await Account.save(account);
    await Currency.save(currency);

    return Promise.resolve(balance);
  }

  getAllBalances(): Promise<Balance[]> {
    return Balance.find();
  }

  getBalance(id: string | undefined): Promise<Balance | Balance[]> {
    return id ? Balance.findOne(id) : Balance.find();
  }

  async updateBalance(newBalance: UpdateBalance): Promise<Balance | string> {
    const balance = await Balance.findOne(newBalance.id);
    const availableAmount = +balance.ammount;

    if (newBalance.operation === 'Increment') {
      balance.ammount = availableAmount + newBalance.amount;
    }

    if (
      newBalance.operation === 'Decrement' &&
      availableAmount >= newBalance.amount
    ) {
      balance.ammount = availableAmount - newBalance.amount;
    }
    return Balance.save(balance);
  }

  deleteBalance(id: string): Promise<DeleteResult> {
    return Balance.delete(id);
  }
}
