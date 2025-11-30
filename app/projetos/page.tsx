import DescricaoProjetos from '@/Componente/DescricaoProjetos/DescricaoProjetos'

export default function Projeto({title,url}){
    return(
         <p className="mb-2">
      O projeto <strong>{title}</strong> pode ser visto
      <a
        href="https://github.com/19Kailane/19Kailane.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline ml-1"
      >
       <DescricaoProjetos/>
      </a>.
    </p>
    );
}