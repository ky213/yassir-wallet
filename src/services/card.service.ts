import { getConnection } from 'typeorm';
import { Card } from '../models/card.model';

export default class CardService {
  static async createCard(card: Card): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Card)
      .values(card)
      .execute();
  }

  static async getCard(number: number): Promise<Card | undefined> {
    return await getConnection()
      .createQueryBuilder()
      .select('card')
      .from(Card, 'card')
      .where('card.number = :number', { number })
      .getOne();
  }

  static async updateCard(number: number, info: any): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Card)
      .set({ ...info })
      .where('number = :number', { number })
      .execute();
  }

  static async deleteCard(number: number): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Card)
      .where('number = :number', { number })
      .execute();
  }
}
