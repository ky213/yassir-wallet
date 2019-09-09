import { createConnection, Connection } from 'typeorm';
import Account from '../models/account.model';
import Balance from '../models/balance.model';
import Currency from '../models/currency.model';

const { DB_URI, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const connectDB = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: DB_URI,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [Account, Balance, Currency],
    synchronize: true,
    logging: false
  });

export default connectDB;
