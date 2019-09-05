import {
  Get,
  Post,
  Route,
  Controller,
  Put,
  Delete,
  BodyProp,
  Tags
} from "tsoa";
import User from "../models/user.model";
import UserService from "../services/user.service";

export interface UserRequest {
  [key: string]: object;
}

@Route("/user")
@Tags("User")
export default class UserController extends Controller {
  @Get("/{id}")
  getUser(id: string): Promise<User | undefined> {
    return UserService.getUser(id);
  }

  @Post()
  createUser(@BodyProp() user: User): Promise<void> {
    return UserService.createUser(user);
  }

  @Put("/{id}")
  updateUser(id: string, @BodyProp() info: UserRequest): Promise<void> {
    return UserService.updateUser(id, info);
  }

  @Delete("/{id}")
  deleteUser(id: string): Promise<void> {
    return UserService.deleteUser(id);
  }
}
