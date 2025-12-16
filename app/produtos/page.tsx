'use client'

import { useEffect, useState } from "react"
import useSWR from "swr"
import ProdutoCard from "@/Componente/ProdutoCard/ProdutoCard"
import { Produto } from "@/models/interfaces"

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function Produtospage() {

  const [search, setSearch] = useState("")
  const [sortOption, setSortOption] = useState("")
  const [filteredData, setFilteredData] = useState<Produto[]>([])

  const fetcher = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Erro ao obter produtos")
    return res.json()
  }

  const { data, error, isLoading } = useSWR<Produto[]>(
    "https://deisishop.pythonanywhere.com/products/",
    fetcher
  );

const [cart, setCart] = useState<Produto[]>([]);


  useEffect(() => {

   const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
   }, []);

  const addToCart = (produto: Produto) => {
    const updatedCart = [...cart, produto];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((p) => p.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce(
    (sum, produto) => sum + Number(produto.price),
    0
    
  );

  

  if (!data) return <p>A carregar...</p>;


  return (
   <div className="p-5 grid grid-cols-3 gap-8">
      {/* LISTA DE PRODUTOS */}
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-4">Produtos</h1>

        <div className="grid grid-cols-3 gap-4">
          {data.map((p) => (
            <ProdutoCard
              key={p.id}
              produto={p}
              onAdd={addToCart}
            />
          ))}
        </div>
      </div>

      {/* CARRINHO */}
      <div className="border p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Carrinho</h2>

        {cart.length === 0 && <p>Carrinho vazio</p>}

        <div className="flex flex-col gap-4">
          {cart.map((p) => (
            <ProdutoCard
              key={p.id}
              produto={p}
              isInCart
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <p className="mt-4 font-bold text-lg">
          Total: {total.toFixed(2)} €
        </p>
      </div>
    </div>
  );
}

