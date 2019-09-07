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
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import Currency from '../models/currency.model';
import CurrencyService from '../services/currency.service';

export interface CurrencyRequest {
  [key: string]: object;
}

@Route('/currency')
@Tags('Currency')
export default class CurrencyController extends Controller {
  @Get('/{id}')
  static getCurrency(id: string): Promise<Currency | undefined> {
    return CurrencyService.getCurrency(id);
  }

  @Post()
  static createCurrency(@BodyProp() currency: Currency): Promise<InsertResult> {
    return CurrencyService.createCurrency(currency);
  }

  @Put('/{id}')
  static updateCurrency(
    id: string,
    @BodyProp() info: CurrencyRequest
  ): Promise<UpdateResult> {
    return CurrencyService.updateCurrency(id, info);
  }

  @Delete('/{id}')
  static deleteCurrency(id: string): Promise<DeleteResult> {
    return CurrencyService.deleteCurrency(id);
  }
}
