export function prepararSeries(resultados) {
  return resultados.map(({ show }) => {
    return {
      id: show.id,
      nombre: show.name ?? "Sin título",
      imagen: show.image?.medium ?? null,
      nota: show.rating?.average ?? null,
      generos: show.genres ?? [],
      anio: show.premiered ? show.premiered.split("-")[0] : "Desconocido",
    };
  });
}

export function ordenarPorNota(series) {
  return series.toSorted((a, b) => {
    const notaA = a.nota ?? 0;
    const notaB = b.nota ?? 0;
    return notaB - notaA;
  });
}

export function contarGeneros(series) {
  return series
    .flatMap((serie) => serie.generos)
    .reduce((conteo, genero) => {
      conteo[genero] = (conteo[genero] ?? 0) + 1;
      return conteo;
    }, {});
}
