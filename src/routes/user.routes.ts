import { Router, Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import UserController from "../controllers/user.controller";

const user = Router();
const userController = new UserController();

user.get("/:id", (req: Request, res: Response, next: Function) => {
  userController
    .getUser(req.params.id)
    .then((result: object | undefined) => {
      res.send(result);
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.post("/", (req: Request, res: Response, next: Function) => {
  userController
    .createUser(req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.put("/:id", (req: Request, res: Response, next: Function) => {
  userController
    .updateUser(req.params.id, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

user.delete("/:id", (req: Request, res: Response, next: Function) => {
  userController
    .deleteUser(req.params.id)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

export default user;
