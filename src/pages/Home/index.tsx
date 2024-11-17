import { CardType } from "../../types/Card";
import { Card } from "../../components/Card";
import { PageTemplate } from "../../components/PageTemplate";
import { Subtitle } from "../../components/Subtitle";
import ItemImage from "../../assets/item.png";
import CaixaImage from "../../assets/caixa.png";
import { SubmitButton } from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
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

        <div className="flex w-full items-center justify-end gap-5">
          <button className="flex items-center justify-center border rounded-[5px] bg-mythical-gradient border-mythical w-full max-w-[236px] h-[61px] gap-5 text-white text-[20px] font-semibold uppercase">
            Retornar <span className="h-[30px] w-px bg-white opacity-15" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M18.9997 5.31336C21.1655 4.06293 23.8339 4.06293 25.9997 5.31336L35.6338 10.8756C37.7996 12.126 39.1337 14.4369 39.1337 16.9377V28.0622C39.1337 30.563 37.7996 32.8739 35.6337 34.1243L25.9997 39.6865C23.8339 40.937 21.1655 40.937 18.9997 39.6865L9.36569 34.1243C7.19989 32.8739 5.8657 30.563 5.8657 28.0622V16.9377C5.8657 14.4369 7.19989 12.126 9.3657 10.8756L18.9997 5.31336Z"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <path
                d="M25.6472 15H19.3591C16.6277 15 14.9994 16.6275 14.9994 19.3575V25.635C14.9994 28.3725 16.6277 30 19.3591 30H25.6397C28.3711 30 29.9994 28.3725 29.9994 25.6425V19.3575C30.0069 16.6275 28.3786 15 25.6472 15ZM23.9439 25.9725H20.2521C19.9444 25.9725 19.6893 25.7175 19.6893 25.41C19.6893 25.1025 19.9444 24.8475 20.2521 24.8475H23.9439C24.9044 24.8475 25.6923 24.0675 25.6923 23.1C25.6923 22.1325 24.9119 21.3525 23.9439 21.3525H20.1395L20.3346 21.5475C20.5522 21.765 20.5522 22.125 20.3346 22.3425C20.222 22.455 20.0795 22.5075 19.9369 22.5075C19.7943 22.5075 19.6518 22.455 19.5392 22.3425L18.3611 21.165C18.1435 20.9475 18.1435 20.5875 18.3611 20.37L19.5392 19.1925C19.7568 18.975 20.117 18.975 20.3346 19.1925C20.5522 19.41 20.5522 19.77 20.3346 19.9875L20.0795 20.235H23.9439C25.5272 20.235 26.8178 21.525 26.8178 23.1075C26.8178 24.69 25.5272 25.9725 23.9439 25.9725Z"
                fill="white"
              />
              <path
                d="M19.2 2.36714C21.242 1.18816 23.758 1.18816 25.8 2.36714L38.2856 9.57568C40.3276 10.7547 41.5856 12.9335 41.5856 15.2915V29.7085C41.5856 32.0665 40.3276 34.2453 38.2856 35.4243L25.8 42.6329C23.758 43.8118 21.242 43.8118 19.2 42.6329L6.71443 35.4243C4.67238 34.2453 3.41443 32.0665 3.41443 29.7085V15.2915C3.41443 12.9335 4.67238 10.7547 6.71443 9.57568L19.2 2.36714Z"
                stroke="white"
                stroke-width="0.8"
              />
            </svg>
          </button>
          <SubmitButton
            text="Abrir caixa"
            maxWidth={266}
            height={82}
            onClick={() => navigate("/roleta")}
          />
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
