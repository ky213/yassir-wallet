import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Currency, { CreateCurrency } from '../models/currency.model';

export default class CurrencyService {
  createCurrency(currency: CreateCurrency): Promise<InsertResult> {
    return Currency.insert(currency);
  }

  getAllCurrencies(): Promise<Currency[]> {
    return Currency.find();
  }

  getCurrency(id: string | undefined): Promise<Currency> {
    return Currency.findOne(id);
  }

  updateCurrency(id: string, info: object): Promise<UpdateResult> {
    return Currency.update(id, info);
  }

  deleteCurrency(id: string): Promise<DeleteResult> {
    return Currency.delete(id);
  }
}
