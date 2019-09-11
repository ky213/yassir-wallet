import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import SwaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../routes';
import swaggerDoc from '../swagger.json';
import AccountRouter from './routes/account.routes';
import BalanceRouter from './routes/balance.routes';
import CurrencyRouter from './routes/currency.routes';
import erroHandler from './middleware/erroHandler';

import './controllers/account.controller';
import './controllers/balance.controller';
import './controllers/currency.controller';

const app = express();

app.use(bodyParser.json());
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

app.use('/account', AccountRouter);
app.use('/balance', BalanceRouter);
app.use('/currency', CurrencyRouter);

app.use(erroHandler);

RegisterRoutes(app);

export default app;
