import { CardType, RouletteCard } from "../types/Card";
import ItemImage from "../assets/item.png";

export const fakeData: CardType[] = [
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EXOTIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "MYTHICAL",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "LEGENDARY",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "LEGENDARY",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "UNCOMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "UNCOMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
    text: "0.9% de chance",
  },
];

export const roletaData: RouletteCard[] = fakeData.map((item) => ({
  name: item.name,
  image: item.image,
  rarity: item.rarity,
}));

export const Rarity = {
  EXOTIC: "Exótico",
  MYTHICAL: "Mítico",
  LEGENDARY: "Lendário",
  EPIC: "Épico",
  RARE: "Raro",
  UNCOMMON: "Incomum",
  COMMON: "Comum",
};
