import { createConnection, Connection } from 'typeorm';
import config from 'config';

const dbConfig: any = config.get('db');

const connectDB = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    entities: [`${__dirname}/../../models/*.model{.ts,.js}`],
    synchronize: true,
    logging: false,
  });

export default connectDB;
