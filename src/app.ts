import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import SwaggerUI from 'swagger-ui-express';
import { RegisterRoutes } from '../routes';
import swaggerDoc from '../swagger.json';
import './controllers/user.controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDoc));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World \n');
});

app.get('/users/:id', async (req: express.Request, res: express.Response) => {
  res.send('get user');
});

RegisterRoutes(app);

export { app };
