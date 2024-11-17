import { PageTemplate } from "../../components/PageTemplate";
import { Roulette } from "../../components/Roulette";
import ItemImage from "../../assets/item.png";
import { RouletteCard } from "../../types/Card";

export function Roleta() {
  return (
    <PageTemplate>
      <Roulette items={fakeData} />
    </PageTemplate>
  );
}

const fakeData: RouletteCard[] = [
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EXOTIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "MYTHICAL",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "LEGENDARY",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "LEGENDARY",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "EPIC",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "RARE",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "UNCOMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "UNCOMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
  {
    name: "Capuz Natalino",
    image: ItemImage,
    rarity: "COMMON",
  },
];
