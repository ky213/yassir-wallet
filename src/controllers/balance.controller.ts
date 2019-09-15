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
import { DeleteResult, InsertResult } from 'typeorm';
import Balance, { UpdateBalance, CreateBalance } from '../models/balance.model';
import BalanceService from '../services/balance.service';

const balance = new BalanceService();

@Route('/balance')
@Tags('Balance')
export default class BalanceController extends Controller {
  @Get('/all')
  getAllBalances(): Promise<Balance[]> {
    return balance.getAllBalances();
  }

  @Get('/{id}')
  getBalance(id: string): Promise<Balance | Balance[]> {
    return balance.getBalance(id);
  }

  @Post()
  createBalance(@BodyProp() newBalance: CreateBalance): Promise<InsertResult> {
    return balance.createBalance(newBalance);
  }

  @Put()
  updateBalance(
    @BodyProp() id: string,
    data: UpdateBalance
  ): Promise<Balance | string> {
    return balance.updateBalance(id, data);
  }

  @Delete('/{id}')
  deleteBalance(id: string): Promise<DeleteResult> {
    return balance.deleteBalance(id);
  }
}
