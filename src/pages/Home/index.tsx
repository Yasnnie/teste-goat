import { CardType } from "../../types/Card";
import { Card } from "../../components/Card";
import { PageTemplate } from "../../components/PageTemplate";
import { Subtitle } from "../../components/Subtitle";
import ItemImage from "../../assets/item.png";
import CaixaImage from "../../assets/caixa.png";
export function Home() {
  const bestItem = fakeData[0];
  return (
    <PageTemplate>
      <Subtitle />

      <div className="flex items-center gap-y-10 gap-x-4 mb-24 justify-between w-full max-w-7xl sm:flex-col md:flex-col lg:flex-row ">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-3xl font-bold">Caixa GOAT</h2>
          <p className="font-light text-xs text-white opacity-50 mt-3">
            Itens especiais com um toque GOAT de SER.
          </p>
        </div>

        <div className="h-box">
          <img
            className="object-contain w-full h-full"
            src={CaixaImage}
            alt="caixa"
          />
        </div>

        <div
          className="flex items-center gap-x-3 pl-4 pr-9 py-1 border rounded"
          style={{
            backgroundImage: `var(--${bestItem.rarity.toLocaleLowerCase()}-gradient)`,
            borderColor: `var(--${bestItem.rarity.toLocaleLowerCase()}-border)`,
            boxShadow: `var(--${bestItem.rarity.toLocaleLowerCase()}-shadow)`,
          }}
        >
          <div className="w-24 h-24 overflow-hidden ">
            <img
              className="object-contain w-full h-full"
              alt={`${bestItem.name} - imagem`}
              src={bestItem.image}
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-none">
              MELHOR ITEM <span className="font-light"> -</span>{" "}
              <span className="opacity-25">
                <span className="font-light">~</span> 5.000
              </span>
            </h3>
            <strong className="text-white font-bold text-sm leading-none mt-0.5">
              Capuz Natalino{" "}
              <span className="font-light">
                - <span className="opacity-25">Exótico</span>
              </span>
            </strong>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2.5">
        {fakeData.map((item, index) => (
          <Card key={index} card={item} />
        ))}
      </div>

      <footer className="w-full max-w-6xl flex justify-between mt-16 items-center gap-x-4">
        <p className="text-white opacity-10 text-sb max-w-xl">
          Ao adquirir uma caixa de sorte no servidor GOAT dentro do GTA RP, o
          cliente está ciente e aceita que a compra não garante um item
          específico. O conteúdo das caixas de sorte é aleatório, sendo essa a
          essência do sistema, onde a experiência de surpresa faz parte da
          compra. Todos os itens obtidos são cosméticos exclusivos, projetados
          para personalizar seu personagem e destacar seu estilo no mundo
          imersivo do RP, sem oferecer vantagens competitivas. Isso inclui
          roupas, acessórios, e veículos personalizados, permitindo uma
          customização única e diferenciada.
        </p>

        <div className="flex items-center justify-center">
          <a>Retornar</a>
          <a>ABRIR CAIXA</a>
        </div>
      </footer>
    </PageTemplate>
  );
}

const fakeData: CardType[] = [
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
