import Caracteristica from "@/Componente/Caracteristica/Caracteristica";

const lista = [
  "Responsável",
  "Criativo",
  "Comunicativo",
  "Persistente",
  "Organizado"
];

export default function CaracteristicaPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Minhas Características</h1>

      <div className="flex flex-wrap">
        {lista.map((c) => (
          <Caracteristica key={c} caracteristica={c} />
        ))}
      </div>
    </div>
  );
}
