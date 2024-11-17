import { PageTemplate } from "../../components/PageTemplate";
import { Roulette } from "../../components/Roulette";
import { roletaData } from "../../utils/fakeData";

export function Roleta() {
  return (
    <PageTemplate>
      <Roulette items={roletaData} />
    </PageTemplate>
  );
}
