import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import PaymentMethod, {
  CreatePaymentMethod,
  UpdatePaymentMethod
} from '../models/paymentMethod.model';
import Country from '../models/country.model';
import Account from '../models/account.model';

export default class PaymentMethodService {
  async createPaymentMethod(
    newPaymentMethod: CreatePaymentMethod
  ): Promise<InsertResult> {
    const account = await Account.findOne(newPaymentMethod.account.id, {
      relations: ['paymentMethods']
    });
    const country = await Country.findOne(newPaymentMethod.country.id, {
      relations: ['paymentMethods']
    });
    const paymentMethod = await PaymentMethod.insert(newPaymentMethod);

    account.paymentMethods.push(paymentMethod.raw[0]);
    country.paymentMethods.push(paymentMethod.raw[0]);
    await Account.save(account);
    await Country.save(country);

    return Promise.resolve(paymentMethod);
  }

  getAllPaymentMethods(): Promise<PaymentMethod[]> {
    return PaymentMethod.find();
  }

  getPaymentMethod(
    id: string | undefined
  ): Promise<PaymentMethod | PaymentMethod[]> {
    return id ? PaymentMethod.findOne(id) : PaymentMethod.find();
  }

  async updatePaymentMethod(
    id: string,
    data: UpdatePaymentMethod
  ): Promise<UpdateResult> {
    return PaymentMethod.update(id, data);
  }

  deletePaymentMethod(id: string): Promise<DeleteResult> {
    return PaymentMethod.delete(id);
  }
}
