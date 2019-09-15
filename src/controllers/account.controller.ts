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
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import Account, { CreateAccount, UpdateAccount } from '../models/account.model';
import AccountService from '../services/account.service';
import Balance from '../models/balance.model';
import PaymentMethod from '../models/paymentMethod.model';

const account = new AccountService();

@Route('/account')
@Tags('Account')
export default class AccountController extends Controller {
  @Get('/all')
  getAllAccounts(): Promise<Account[]> {
    return account.getAllAccounts();
  }

  @Get('/{id}')
  getAccount(id: string): Promise<Account | undefined> {
    return account.getAccount(id);
  }

  @Get('/{id}/balances')
  getBalances(id: string): Promise<Balance[]> {
    return account.getBalances(id);
  }

  @Get('/{id}/paymentMethods')
  getPaymentMethods(id: string): Promise<PaymentMethod[]> {
    return account.getPaymentMethods(id);
  }

  @Post()
  createAccount(@BodyProp() newAccount: CreateAccount): Promise<InsertResult> {
    return AccountService.createAccount(newAccount);
  }

  @Put('/{id}')
  updateAccount(
    id: string,
    @BodyProp() data: UpdateAccount
  ): Promise<UpdateResult> {
    return account.updateAccount(id, data);
  }

  @Delete('/{id}')
  deleteAccount(id: string): Promise<DeleteResult> {
    return account.deleteAccount(id);
  }
}
