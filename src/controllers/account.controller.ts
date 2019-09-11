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
import Account from '../models/account.model';
import AccountService from '../services/account.service';
import Balance from '../models/balance.model';

export interface AccountRequest {
  [key: string]: object;
}

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
  getAccountBalances(id: string): Promise<Balance[]> {
    return account.getAccountBalances(id);
  }

  @Post()
  createAccount(@BodyProp() newAccount: CreateAccount): Promise<InsertResult> {
    return account.createAccount(newAccount);
  }

  @Put('/{id}')
  updateAccount(
    id: string,
    @BodyProp() info: AccountRequest
  ): Promise<UpdateResult> {
    return account.updateAccount(id, info);
  }

  @Delete('/{id}')
  deleteAccount(id: string): Promise<DeleteResult> {
    return account.deleteAccount(id);
  }
}

export interface CreateAccount {
  userId: string;
}
