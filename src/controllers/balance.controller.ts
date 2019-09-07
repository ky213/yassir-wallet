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
import Balance from '../models/balance.model';
import BalanceService from '../services/balance.service';

export interface BalanceUpdateRequest {
  id: string;
  amount: number;
}

@Route('/balance')
@Tags('Balance')
export default class BalanceController extends Controller {
  @Get('/{id}')
  static getBalance(id: string): Promise<Balance | undefined> {
    return BalanceService.getBalance(id);
  }

  @Post()
  static createBalance(@BodyProp() balance: Balance): Promise<InsertResult> {
    return BalanceService.createBalance(balance);
  }

  @Put('/{id}')
  static updateBalance(
    id: string,
    @BodyProp() info: BalanceUpdateRequest
  ): Promise<UpdateResult> {
    return BalanceService.updateBalance(id, info);
  }

  @Delete('/{id}')
  static deleteBalance(id: string): Promise<DeleteResult> {
    return BalanceService.deleteBalance(id);
  }
}
