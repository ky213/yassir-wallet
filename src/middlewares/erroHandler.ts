/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(err.message, err);
  res.status(500).send('Something failed !!');
};
