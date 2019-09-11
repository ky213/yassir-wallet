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
import Currency, { CreateCurrency } from '../models/currency.model';
import CurrencyService from '../services/currency.service';

const currency = new CurrencyService();

@Route('/currency')
@Tags('Currency')
export default class CurrencyController extends Controller {
  @Get('/all')
  getAllCurrencies(): Promise<Currency[]> {
    return currency.getAllCurrencies();
  }

  @Get('/{id}')
  getCurrency(id: string): Promise<Currency> {
    return currency.getCurrency(id);
  }

  @Post()
  createCurrency(
    @BodyProp() newCurrency: CreateCurrency
  ): Promise<InsertResult> {
    return currency.createCurrency(newCurrency);
  }

  @Put('/{id}')
  updateCurrency(id: string, @BodyProp() info: object): Promise<UpdateResult> {
    return currency.updateCurrency(id, info);
  }

  @Delete('/{id}')
  deleteCurrency(id: string): Promise<DeleteResult> {
    return currency.deleteCurrency(id);
  }
}
