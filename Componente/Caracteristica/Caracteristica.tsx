import Link from "next/link";

interface CaracteristicaProps {
  caracteristica: string;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
  return (
    <Link href={`/caracteristicas/${caracteristica.toLowerCase()}`}>
      <div className="bg-white shadow-md rounded p-4 m-2 cursor-pointer hover:scale-105 transition">
        <p className="text-lg font-semibold">{caracteristica}</p>
      </div>
    </Link>
  );
}
