import { IsString } from 'class-validator';

class AccountDTO {
  @IsString()
  userID: string;
}

export default AccountDTO;
