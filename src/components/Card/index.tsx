import { CardType } from "../../types/Card";

interface Props {
  card: CardType;
  selected?: boolean;
}
export function Card({ card, selected }: Props) {
  return (
    <section
      className="relative p-3 w-card h-card min-w-[120px] max-w-[120px] flex flex-col rounded justify-center items-center border"
      style={{
        backgroundImage: `var(--${card.rarity.toLocaleLowerCase()}-gradient)`,
        borderColor: `var(--${card.rarity.toLocaleLowerCase()}-border)`,
        boxShadow: `var(--${card.rarity.toLocaleLowerCase()}-shadow)`,
        transform: selected ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          className="object-contain w-full h-full"
          src={card.image}
          alt={`imagem ${card.name}`}
        />
      </div>
      {card.text && (
        <p className="absolute bottom-2.5 text-sb font-light text-card-text">
          {card.text}
        </p>
      )}
    </section>
  );
}
