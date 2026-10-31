const URL_BASE = "https://api.tvmaze.com";

export async function buscarSeries(texto) {
  const respuesta = await fetch(`${URL_BASE}/search/shows?q=${texto}`);

  if (!respuesta.ok) {
    throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }

  const datos = await respuesta.json();
  return datos;
}
