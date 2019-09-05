import {
  Get,
  Post,
  Route,
  Controller,
  Put,
  Delete,
  BodyProp,
  Tags
} from "tsoa";
import Card from "../models/card.model";
import CardService from "../services/card.service";

@Route("/card")
@Tags("Card")
export default class CardController extends Controller {
  @Get("/{number}")
  getCard(number: number): Promise<Card | undefined> {
    return CardService.getCard(number);
  }

  @Post()
  createCard(
    @BodyProp()
    card: Card
  ): Promise<void> {
    return CardService.createCard(card);
  }

  @Put("/{number}")
  updateCard(
    number: number,
    @BodyProp()
    info: object
  ): Promise<void> {
    return CardService.updateCard(number, info);
  }

  @Delete("/{number}")
  deleteCard(number: number): Promise<void> {
    return CardService.deleteCard(number);
  }
}
