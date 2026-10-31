import { useState } from "react";

export default function Buscador({ onBuscar }) {
  const [texto, setTexto] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    const limpio = texto.trim();

    if (limpio === "") {
      return;
    }

    onBuscar(limpio);
  }

  return (
    <form className="buscador" onSubmit={manejarEnvio}>
      <label htmlFor="busqueda">Nombre de la serie</label>
      <input
        id="busqueda"
        type="text"
        placeholder="Por ejemplo: The Office"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />
      <button>Buscar</button>
    </form>
  );
}
