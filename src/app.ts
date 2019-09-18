import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import initRoutes from './routes';
import erroHandler from './middlewares/erroHandler';

const app = express();
app.use(bodyParser.json());
initRoutes(app);

app.use(erroHandler);

export default app;
