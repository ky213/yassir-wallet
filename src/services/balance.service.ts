import { DeleteResult, InsertResult } from 'typeorm';
import Balance, { CreateBalance, UpdateBalance } from '../models/balance.model';
import Country from '../models/country.model';
import Account from '../models/account.model';

export default class BalanceService {
  async createBalance(newBalance: CreateBalance): Promise<InsertResult> {
    const account = await Account.findOne(newBalance.account.id, {
      relations: ['balances']
    });
    const country = await Country.findOne(newBalance.country.id, {
      relations: ['balances']
    });
    const balance = await Balance.insert(newBalance);

    account.balances.push(balance.raw[0]);
    country.balances.push(balance.raw[0]);
    await Account.save(account);
    await Country.save(country);

    return Promise.resolve(balance);
  }

  getAllBalances(): Promise<Balance[]> {
    return Balance.find();
  }

  getBalance(id: string | undefined): Promise<Balance | Balance[]> {
    return id ? Balance.findOne(id) : Balance.find();
  }

  async updateBalance(
    id: string,
    newBalance: UpdateBalance
  ): Promise<Balance | string> {
    const balance = await Balance.findOne(id);
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
