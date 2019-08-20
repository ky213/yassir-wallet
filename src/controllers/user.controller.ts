import { Get, Post, Route, Controller, Put, Delete, BodyProp } from "tsoa";
import UserService from "../services/user.service";
import { User, UserCreationRequest } from "../models/user.model";

@Route("users")
export class UserController extends Controller {
  @Get()
  public async getAll(): Promise<void> {}

  @Post()
  public async create(@BodyProp() user: string): Promise<void> {}

  @Put("/{id}")
  public async update(id: string, @BodyProp() user: string): Promise<void> {}

  @Delete("/{id}")
  public async remove(id: string): Promise<void> {}
}
