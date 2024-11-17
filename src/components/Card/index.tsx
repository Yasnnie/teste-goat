import { CardType } from "../../types/Card";

interface Props {
  card: CardType;
}
export function Card({ card }: Props) {
  return (
    <section
      className="relative p-3 w-card h-card flex flex-col rounded justify-center items-center border"
      style={{
        backgroundImage: `var(--${card.rarity.toLocaleLowerCase()}-gradient)`,
        borderColor: `var(--${card.rarity.toLocaleLowerCase()}-border)`,
        boxShadow: `var(--${card.rarity.toLocaleLowerCase()}-shadow)`,
      }}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          className="object-contain w-full h-full" // Ajuste a imagem dentro do contêiner
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
