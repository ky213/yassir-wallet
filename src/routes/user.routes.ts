import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { User } from '../models/user.model';
import { QueryFailedError } from 'typeorm';

const user = Router();
const userController = new UserController();

user.get('/:id', (req: Request, res: Response, next: Function) => {
  userController
    .getUser(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.post('/', (req: Request, res: Response, next: Function) => {
  userController
    .createUser(req.body)
    .then(user => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.put('/:id', (req: Request, res: Response, next: Function) => {
  userController
    .updateUser(req.params.id, req.body)
    .then(user => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.delete('/:id', (req: Request, res: Response, next: Function) => {
  userController
    .deleteUser(req.params.id)
    .then(user => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

export default user;
