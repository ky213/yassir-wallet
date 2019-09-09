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

export interface AccountRequest {
  [key: string]: object;
}

@Route('/account')
@Tags('Account')
export default class AccountController extends Controller {
  @Get('/{id}')
  static getAccount(id: string): Promise<Account | undefined> {
    return AccountService.getAccount(id);
  }

  @Post()
  static createAccount(@BodyProp() account: Account): Promise<InsertResult> {
    return AccountService.createAccount(account);
  }

  @Put('/{id}')
  static updateAccount(
    id: string,
    @BodyProp() info: AccountRequest
  ): Promise<UpdateResult> {
    return AccountService.updateAccount(id, info);
  }

  @Delete('/{id}')
  static deleteAccount(id: string): Promise<DeleteResult> {
    return AccountService.deleteAccount(id);
  }
}
