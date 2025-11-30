interface Projectoprops {
nome:string
}

export default function Projeto(props:Projeto){
    
    return (

        
     <p>
      Este é o projeto: <strong>{props.nome}</strong>.  
      Você pode acessar aqui:
      <a href={props.url} target="_blank"> Clique para abrir </a>.
    </p>

    )
}
 <Projeto 
 nome= "loja virtual"
 url= "http://127.0.0.1:3000/lab6"
 />