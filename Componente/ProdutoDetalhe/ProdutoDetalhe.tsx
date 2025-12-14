import Image from "next/image";
import { Produto } from "@/models/interfaces";

export default function ProdutoDetalhe({ produto }: { produto: Produto }) {

    const imageUrl = `https://deisishop.pythonanywhere.com${produto.image}`;

    return (
        <div className="max-w-lg mx-auto p-5 border rounded-xl shadow">
            <Image
                src={imageUrl}
                width={300}
                height={300}
                alt={produto.title}
                className="object-contain w-full h-80"
            />

            <h1 className="text-3xl font-bold mt-4">{produto.title}</h1>

            <p className="text-xl mt-2">{produto.price} €</p>

            <p className="mt-4 text-gray-700">{produto.description}</p>

            <p className="mt-2 text-sm text-gray-500">
                Categoria: {produto.category}
            </p>

            <p className="mt-2 text-sm text-gray-500">
                Rating: {produto.rating.rate} ⭐ ({produto.rating.count} reviews)
            </p>
        </div>
    );
}
