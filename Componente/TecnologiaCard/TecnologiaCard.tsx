import React from "react";

interface TecnologiaProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaProps) {
  return (
    <div className="w-40 h-48 bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center m-4">
      <img 
        src={`/image/${image}`} 
        alt={title} 
        className="w-16 h-16 mb-3"
      />
      <h3 className="text-center font-semibold">{title}</h3>
    </div>
  );
}

