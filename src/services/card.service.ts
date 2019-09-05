import { getConnection } from "typeorm";
import Card from "../models/card.model";

export default class CardService {
  static createCard(card: Card): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(Card)
      .values(card)
      .execute();
  }

  static getCard(number: number): Promise<Card | undefined> {
    return getConnection()
      .createQueryBuilder()
      .select("card")
      .from(Card, "card")
      .where("card.number = :number", { number })
      .getOne();
  }

  static updateCard(number: number, info: any): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .update(Card)
      .set({ ...info })
      .where("number = :number", { number })
      .execute();
  }

  static deleteCard(number: number): Promise<any> {
    return getConnection()
      .createQueryBuilder()
      .delete()
      .from(Card)
      .where("number = :number", { number })
      .execute();
  }
}
