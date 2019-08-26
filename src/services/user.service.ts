import { UserCreationRequest } from "../models/user.model";

export default class UserService {
  get() {
    return  Promise.resolve({
        id: 1,
        email: "user1@gmail.com",
        name: {
          first: "user1",
          last: "user1s"
        },
        phoneNumbers: ["1234567890"]
      });
  }

  create(requestBody: UserCreationRequest){
    
  }
}
