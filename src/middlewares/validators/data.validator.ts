import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import HttpException from '../../exceptions/HttpException';

function validationMiddleware<T>(type: any): express.RequestHandler {
  return async (req, res, next) => {


    const errors: ValidationError[] = await validate(plainToClass(type, req.body))
    if (errors.length > 0) {
      const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
      next(new HttpException(400, message));
    } else {
      next();
    }
  };
}

export default validationMiddleware;