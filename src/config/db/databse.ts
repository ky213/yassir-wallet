import { createConnection, Connection } from 'typeorm';
import Account from '../../models/account.model';
import Balance from '../../models/balance.model';
import Country from '../../models/country.model';
import PaymentMethod from '../../models/paymentMethod.model';
import config from "config"

const dbConfig = config.get("db")

const connectDB = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    entities: [
      __dirname + '/../../models/*.model{.ts,.js}',
    ],
    synchronize: true,
    logging: false
  });

export default connectDB;
