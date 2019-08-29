import { getConnection } from 'typeorm';
import { User } from '../models/user.model';

export default class UserService {
  static async createUser(user: User): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }

  static async getUser(id: string): Promise<User | undefined> {
    return await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.id = :id', { id })
      .getOne();
  }

  static async updateUser(id: string, info: object): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(info)
      .where('id = :id', { id })
      .execute();
  }

  static async deleteUser(id: string): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
  }
}
