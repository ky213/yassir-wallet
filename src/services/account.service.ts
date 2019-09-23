import { getManager } from 'typeorm';
import Account from '../models/account.model';
import Country from '../models/country.model';
import AccountDTO from '../apiv1/dtos/AccountDTO';
import Balance from '../models/balance.model';

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

export const getCountryBalance = async (
  accountId: string,
  countryId: string,
): Promise<Balance | string> => {
  const balance = await Balance.findOne({
    where: { account: accountId, country: countryId },
  });
  if (balance) return Promise.resolve(balance);
  return Promise.resolve('balance not found');
};
