import Tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/Componente/TecnologiaCard/TecnologiaCard";

export default function TecnologiasPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tecnologias que Utilizei</h1>

      <div className="flex flex-wrap">
        {Tecnologias.map((tecnologia) => (
          <TecnologiaCard 
            key={tecnologia.title}
            title={tecnologia.title}
            image={tecnologia.image}
          />
        ))}
      </div>
    </div>
  );
}
