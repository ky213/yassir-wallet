import { Router, Request, Response } from 'express';
import { CardController } from '../controllers/card.controller';
import { QueryFailedError } from 'typeorm';

const card: Router = Router();
const cardController = new CardController();

card.get('/:number', (req: Request, res: Response, next: Function) => {
  cardController
    .getCard(+req.params.number)
    .then(card => {
      res.send(card);
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

card.post('/', (req: Request, res: Response, next: Function) => {
  cardController
    .createCard(req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

card.put('/:number', (req: Request, res: Response, next: Function) => {
  cardController
    .updateCard(+req.params.number, req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

card.delete('/:id', (req: Request, res: Response, next: Function) => {
  cardController
    .deleteCard(+req.params.id)
    .then(() => {
      res.status(200).end();
    })
    .catch((error: QueryFailedError) => {
      res.statusCode = 400;
      next(error);
    });
});

export default card;
