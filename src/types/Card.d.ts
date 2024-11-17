export type CardRarity =
  | "EXOTIC"
  | "MYTHICAL"
  | "LEGENDARY"
  | "EPIC"
  | "RARE"
  | "UNCOMMON"
  | "COMMON";

export interface CardType {
  name: string;
  image: string;
  rarity: CardRarity;
  text?: string;
}
