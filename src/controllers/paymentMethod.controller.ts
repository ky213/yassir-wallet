import {
  Get,
  Post,
  Route,
  Controller,
  Put,
  Delete,
  BodyProp,
  Tags
} from 'tsoa';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import PaymentMethod, {
  UpdatePaymentMethod,
  CreatePaymentMethod
} from '../models/paymentMethod.model';
import PaymentMethodService from '../services/paymentMethod.service';

const paymentMethod = new PaymentMethodService();

@Route('/paymentMethod')
@Tags('Payment Methods')
export default class PaymentMethodController extends Controller {
  @Get('/all')
  getAllPaymentMethods(): Promise<PaymentMethod[]> {
    return paymentMethod.getAllPaymentMethods();
  }

  @Get('/{id}')
  getPaymentMethod(id: string): Promise<PaymentMethod | PaymentMethod[]> {
    return paymentMethod.getPaymentMethod(id);
  }

  @Post()
  createPaymentMethod(
    @BodyProp() newPaymentMethod: CreatePaymentMethod
  ): Promise<InsertResult> {
    return paymentMethod.createPaymentMethod(newPaymentMethod);
  }

  @Put()
  updatePaymentMethod(
    id: string,
    @BodyProp() data: UpdatePaymentMethod
  ): Promise<UpdateResult> {
    return paymentMethod.updatePaymentMethod(id, data);
  }

  @Delete('/{id}')
  deletePaymentMethod(id: string): Promise<DeleteResult> {
    return paymentMethod.deletePaymentMethod(id);
  }
}
