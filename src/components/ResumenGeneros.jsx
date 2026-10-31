export default function ResumenGeneros({ total, generos }) {
  const textoGeneros = Object.keys(generos)
    .map((genero) => `${genero}: ${generos[genero]}`)
    .join(" · ");

  return <p>{total} series encontradas. {textoGeneros}</p>;
}
