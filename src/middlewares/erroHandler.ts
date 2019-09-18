/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export interface CustomError {
  status: number;
  source: string;
  type: string;
  content: any;
}

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.log('error', '', err);
  res.status(400).send(err.message);
};
