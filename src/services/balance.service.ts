import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Balance from '../models/balance.model';

export default class BalanceService {
  static createBalance(balance: Balance): Promise<InsertResult> {
    return Balance.insert(balance);
  }

  static getBalance(id: string): Promise<Balance | undefined> {
    return Balance.findOne(id);
  }

  static updateBalance(id: string, info: object): Promise<UpdateResult> {
    return Balance.update(id, info);
  }

  static deleteBalance(id: string): Promise<DeleteResult> {
    return Balance.delete(id);
  }
}
