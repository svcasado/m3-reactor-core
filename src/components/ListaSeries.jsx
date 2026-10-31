import TarjetaSerie from "./TarjetaSerie.jsx";

export default function ListaSeries({ series }) {
  return (
    <div className="resultados">
      {series.map((serie) => (
        <TarjetaSerie key={serie.id} serie={serie} />
      ))}
    </div>
  );
}
