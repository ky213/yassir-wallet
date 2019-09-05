import { getConnection } from 'typeorm';
import User from '../models/user.model';

export default class UserService {
  static createUser(user: User): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }

  static getUser(id: string): Promise<User | undefined> {
    return getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.id = :id', { id })
      .getOne();
  }

  static updateUser(id: string, info: object): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .update(User)
      .set(info)
      .where('id = :id', { id })
      .execute();
  }

  static deleteUser(id: string): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }
}
