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
import Country, { CreateCountry } from '../models/country.model';
import CountryService from '../services/country.service';
import PaymentMethod from '../models/paymentMethod.model';

const country = new CountryService();

@Route('/country')
@Tags('Country')
export default class CountryController extends Controller {
  @Get('/all')
  getAllCurrencies(): Promise<Country[]> {
    return country.getAllCountries();
  }

  @Get('/{id}')
  getCountry(id: string): Promise<Country> {
    return country.getCountry(id);
  }

  @Get('/{id}/paymentMethods')
  getPaymentMethods(id: string): Promise<PaymentMethod[]> {
    return country.getPaymentMethods(id);
  }

  @Post()
  createCountry(@BodyProp() newCountry: CreateCountry): Promise<InsertResult> {
    return country.createCountry(newCountry);
  }

  @Put('/{id}')
  updateCountry(id: string, @BodyProp() data: object): Promise<UpdateResult> {
    return country.updateCountry(id, data);
  }

  @Delete('/{id}')
  deleteCountry(id: string): Promise<DeleteResult> {
    return country.deleteCountry(id);
  }
}
