import { getManager } from 'typeorm';
import Account from '../models/account.model';
import Country from '../models/country.model';
import Balance from '../models/balance.model';
import AccountDTO from '../apiv1/dtos/AccountDTO';

export const create = async (accountDTO: AccountDTO): Promise<void> => {
  const country = await Country.findOneOrFail({ code: accountDTO.code });

  const balance = new Balance();
  balance.amount = 0;
  balance.country = country;

  const account: Account = new Account();
  account.userId = accountDTO.userID;
  account.balances = [balance];

  return getManager().transaction(async transactionalEntityManager => {
    await transactionalEntityManager.save(balance);
    await transactionalEntityManager.save(account);
  });
};
