import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="ícone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans?idcmp=s08%3Ac13%3A3ea9720bc8b644d8a93f04b278d48332&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYfgvSPCgju910WXjW911Entkrbapzm29IuO4QdNdjg_ykTxusJ7kLxoC5D0QAvD_BwE" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="ícone dos carros SUV" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs?idcmp=s08%3Ac13%3Acc5557bdc18f4ebb8d2de994389066c7&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYfJ6OAsT5B1B1fZK9Wq7eIlBF_0vtpuiRoLov_FEjjGrara2pJvGxhoC-04QAvD_BwE" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="ícone dos carros de luxo" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo" target="_ blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}