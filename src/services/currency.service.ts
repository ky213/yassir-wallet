import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Currency from '../models/currency.model';

export default class CurrencyService {
  static createCurrency(currency: Currency): Promise<InsertResult> {
    return Currency.insert(currency);
  }

  static getCurrency(id: string): Promise<Currency | undefined> {
    return Currency.findOne(id);
  }

  static updateCurrency(id: string, info: object): Promise<UpdateResult> {
    return Currency.update(id, info);
  }

  static deleteCurrency(id: string): Promise<DeleteResult> {
    return Currency.delete(id);
  }
}
