'use client'

import { useEffect, useState } from "react"
import useSWR from "swr"
import ProdutoCard from "@/Componente/ProdutoCard/ProdutoCard"
import { Produto } from "@/models/interfaces"

export default function Produtospage() {

  // ✅ AGORA está correto
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

  useEffect(() => {
    if (!data) return

    let filtered = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )

    switch (sortOption) {
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
    }

    setFilteredData(filtered)
  }, [search, sortOption, data])

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <div className="p-6">
      {/* Input + Select */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar produtos..."
          className="p-2 border rounded"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Ordenar por</option>
          <option value="name-asc">Crescente</option>
          <option value="name-desc">Decrescente</option>
          
        </select>
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-3 gap-6">
        {filteredData.map((product) => (
          <ProdutoCard key={product.id} produto={product} />
        ))}
      </div>
    </div>
  )
}
