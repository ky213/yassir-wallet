// import { UserCreationRequest } from '../models/user.model';

export default class UserService {
  static get(): Promise<object> {
    return Promise.resolve({
      id: 1,
      email: 'user1@gmail.com',
      name: {
        first: 'user1',
        last: 'user1s',
      },
      phoneNumbers: ['1234567890'],
    });
  }
}
