import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import SwaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../routes';
import swaggerDoc from '../swagger.json';
import UserRouter from './routes/user.routes';
import CardRouter from './routes/card.routes';

import './controllers/user.controller';
import './controllers/card.controller';

const app = express();

app.use(bodyParser.json());
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

app.use('/user', UserRouter);
app.use('/card', CardRouter);

app.use((error: Error, req: Request, res: Response, next: Function) => {
  res.send(error);
});

RegisterRoutes(app);

export { app };
