import React from "react";
import Tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/Componente/TecnologiaCard/TecnologiaCard";

export default function TecnologiasPage() {
  console.log("Tecnologias importadas:", Tecnologias); // debug
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tecnologias que Utilizei</h1>

      <div className="flex flex-wrap">
        {Array.isArray(Tecnologias) ? (
          Tecnologias.map((tecnologia) => (
            <TecnologiaCard 
              key={tecnologia.title}
              title={tecnologia.title}
              image={tecnologia.image}
              


              
            />
          ))
        ) : (
          <p>As tecnologias não foram carregadas corretamente.</p>
        )}
      </div>
    </div>
  );
}


