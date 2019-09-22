import { IsString } from 'class-validator';

class AccountDTO {
  @IsString()
  userID: string;

  @IsString()
  code: string;
}

export default AccountDTO;
