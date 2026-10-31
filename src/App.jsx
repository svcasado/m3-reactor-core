import { useState } from "react";
import { buscarSeries } from "./api.js";
import { prepararSeries, ordenarPorNota } from "./datos.js";
import Buscador from "./components/Buscador.jsx";
import ListaSeries from "./components/ListaSeries.jsx";

export default function App() {
  const [series, setSeries] = useState([]);

  const ordenadas = ordenarPorNota(series);

  async function buscar(texto) {
    const resultados = await buscarSeries(texto);
    setSeries(prepararSeries(resultados));
  }

  return (
    <>
      <header>
        <h1>Buscador de series</h1>
        <Buscador onBuscar={buscar} />
      </header>
      <main>
        <ListaSeries series={ordenadas} />
      </main>
    </>
  );
}
