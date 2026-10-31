export default function EstadoBusqueda({ consulta, cargando, error }) {
  if (consulta === "") {
    return <p className="estado">Escribe el nombre de una serie para empezar.</p>;
  }

  if (cargando) {
    return <p className="estado">Cargando series...</p>;
  }

  if (error !== "") {
    return (
      <p className="error">
        No se pudieron cargar las series ({error}). Inténtalo de nuevo.
      </p>
    );
  }

  return <p className="estado">No se encontraron series para "{consulta}".</p>;
}
