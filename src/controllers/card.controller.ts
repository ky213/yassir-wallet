import {
  Get,
  Post,
  Route,
  Controller,
  Put,
  Delete,
  BodyProp,
  Tags
} from 'tsoa';
import { Card } from '../models/card.model';
import CardService from '../services/card.service';

export interface ICardRequest {
  [key: string]: any;
}

@Route('/card')
@Tags('Card')
export class CardController extends Controller {
  @Get('/{number}')
  async getCard(number: number): Promise<Card | undefined> {
    return await CardService.getCard(number);
  }
  @Post()
  async createCard(
    @BodyProp()
    card: Card
  ): Promise<void> {
    return await CardService.createCard(card);
  }
  @Put('/{number}')
  async updateCard(
    number: number,
    @BodyProp()
    info: ICardRequest
  ): Promise<void> {
    return await CardService.updateCard(number, info);
  }
  @Delete('/{number}')
  async deleteCard(number: number): Promise<void> {
    return await CardService.deleteCard(number);
  }
}
