export default function TarjetaSerie({ serie }) {
  return (
    <article className="tarjeta">
      {serie.imagen ? (
        <img src={serie.imagen} alt={serie.nombre} />
      ) : (
        <div className="sin-imagen">Sin imagen</div>
      )}
      <h2>{serie.nombre}</h2>
      <p>
        {serie.anio} · {serie.nota ?? "Sin nota"}
      </p>
      <p>{serie.generos.join(", ") || "Sin género"}</p>
    </article>
  );
}
