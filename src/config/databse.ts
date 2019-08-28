import { createConnection, Connection } from 'typeorm';
import { User } from '../models/user.model';
import { Card } from '../models/card.model';

const { DB_URI, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const connectDB = (): Promise<Connection> => {
  return createConnection({
    type: 'postgres',
    host: DB_URI,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [User, Card],
    synchronize: true,
    logging: false
  });
};
