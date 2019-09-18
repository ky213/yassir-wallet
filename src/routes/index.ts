
import { Express } from 'express'
import AccountRouter from './account.routes'


const URL_PREFIX_V1 = "/api/v1"
const URL_PREFIX = URL_PREFIX_V1

export default (app: Express) => {
    app.use(`${URL_PREFIX}/account`, AccountRouter);
}