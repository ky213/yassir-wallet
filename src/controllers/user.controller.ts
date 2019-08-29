import {
  Get,
  Post,
  Route,
  Controller,
  Put,
  Delete,
  BodyProp,
  Response,
  Tags
} from 'tsoa';
import { User } from '../models/user.model';
import UserService from '../services/user.service';

export interface IUserRequest {
  [key: string]: any;
}

@Route('/user')
@Tags('User')
export class UserController extends Controller {
  @Get('/{id}')
  async getUser(id: string): Promise<User | undefined> {
    return await UserService.getUser(id);
  }

  @Post()
  async createUser(@BodyProp() user: User): Promise<void> {
    console.log(user);

    return UserService.createUser(user);
  }

  @Put('/{id}')
  async updateUser(id: string, @BodyProp() info: IUserRequest): Promise<void> {
    return await UserService.updateUser(id, info);
  }

  @Delete('/{id}')
  async deleteUser(id: string): Promise<void> {
    return await UserService.deleteUser(id);
  }
}
