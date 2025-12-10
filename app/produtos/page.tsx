'use client'

import {Produto} from '@/models/interfaces'
import useSWR from 'swr';
import Image from 'next/image'


export default function Produtospage(){
    
const fetcher = async(url: string)=> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error ('erro:${res.status} ${res.statusText}');
    }
    return res.json();
} ;         


const url ='https://deisishop.pythonanywhere.com/products'
const {data, error, isLoading }  = useSWR<Produto[]>(url, fetcher)


if(error) return <p>{error.mensage}</p>
if (isLoading) return
if (!data) return <p> Sem dados</p>

return (

    <>
    {data.map(p =>(
     <Image
     key={p.id}
     src={p.image}
     width ={100}
     height={100}
     alt={p.title}
     />
    ))}
    </>
  )
}


