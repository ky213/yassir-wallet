import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Country, { CreateCountry } from '../models/country.model';
import PaymentMethod from '../models/paymentMethod.model';

export default class CountryService {
  createCountry(country: CreateCountry): Promise<InsertResult> {
    return Country.insert(country);
  }

  getAllCountries(): Promise<Country[]> {
    return Country.find();
  }

  getCountry(id: string | undefined): Promise<Country> {
    return Country.findOne(id);
  }

  async getPaymentMethods(id: string): Promise<PaymentMethod[]> {
    const country = await Country.findOne(id, {
      relations: ['paymentMethods']
    });
    return country.paymentMethods;
  }

  updateCountry(id: string, data: object): Promise<UpdateResult> {
    return Country.update(id, data);
  }

  deleteCountry(id: string): Promise<DeleteResult> {
    return Country.delete(id);
  }
}
