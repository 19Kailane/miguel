"use client";

import Image from "next/image";
import { Produto } from "@/models/interfaces";

interface Props {
    produto: Produto;
}

export default function ProdutoCard({ produto }: Props) {

    // TEMPLATE STRING CORRETA
    const imageUrl = `https://deisishop.pythonanywhere.com${produto.image}`;

    return (
       <div className="border rounded-xl shadow p-4 flex flex-col gap-3 hover:shadow-lg transition">
            <img
                src={imageUrl}
                width={200}
                height={200}
                alt={produto.title}
                className="object-contain w-full h-48"
            />

            <h2 className="text-lg font-semibold">{produto.title}</h2>

            <p className="text-blue-600 font-bold">{produto.price} €</p>

<link
href={`/produtos/${produto.id}`}
className="bg-blue-600 text-white py-2 px-3 rounded text-center hover:bg-blue-700">
  
</link>
        </div>
    );
}

