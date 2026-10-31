import { useState } from "react";
import { buscarSeries } from "./api.js";
import { prepararSeries, ordenarPorNota } from "./datos.js";
import Buscador from "./components/Buscador.jsx";
import EstadoBusqueda from "./components/EstadoBusqueda.jsx";
import ListaSeries from "./components/ListaSeries.jsx";

export default function App() {
  const [consulta, setConsulta] = useState("");
  const [series, setSeries] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const ordenadas = ordenarPorNota(series);

  async function buscar(texto) {
    setConsulta(texto);
    setSeries([]);
    setError("");
    setCargando(true);

    try {
      const resultados = await buscarSeries(texto);
      setSeries(prepararSeries(resultados));
    } catch (fallo) {
      setError(fallo.message);
    }

    setCargando(false);
  }

  return (
    <>
      <header>
        <h1>Buscador de series</h1>
        <Buscador onBuscar={buscar} />
      </header>
      <main>
        {series.length > 0 ? (
          <ListaSeries series={ordenadas} />
        ) : (
          <EstadoBusqueda
            consulta={consulta}
            cargando={cargando}
            error={error}
          />
        )}
      </main>
    </>
  );
}
