import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

class CountryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(3)
  code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  symbol: string;
}

export default CountryDTO;
