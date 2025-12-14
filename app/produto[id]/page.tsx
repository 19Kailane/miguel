"use client";

import useSWR from "swr";
import Link from "next/link";
import ProdutoDetalhe from "@/Componente/ProdutoDetalhe/ProdutoDetalhe";
import { Produto } from "@/models/interfaces";

const [sortOption, setSortOption] = useState("")


const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao carregar produto");
    return res.json();
};

export default function ProdutoPage({ params }: { params: { id: string } }) {


    
    const { id } = params;

    const { data, error, isLoading } = useSWR<Produto>(
        `https://deisishop.pythonanywhere.com/products/${id}`,
        fetcher
    );

    if (error) return <p>Erro ao carregar</p>;
    if (isLoading) return <p>A carregar...</p>;
    if (!data) return <p>Produto não encontrado</p>;


    return (
        <div className="p-5">
            <ProdutoDetalhe produto={data} />

            {/* Botão voltar */}
            <Link
                href="/produtos"
                className="block mt-5 bg-gray-800 text-white py-2 px-4 rounded text-center"
            >
                Voltar aos produtos
            </Link>

 <select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
  className="p-2 border rounded mb-6 ml-0 sm:ml-4"
>
  <option value="">Ordenar por</option>
  <option value="name-asc">Nome (A → Z)</option>
  <option value="name-desc">Nome (Z → A)</option>
  <option value="price-asc">Preço (baixo → alto)</option>
  <option value="price-desc">Preço (alto → baixo)</option>
</select>

        </div>
        
        
    );
}

