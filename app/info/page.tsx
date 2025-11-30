 import TecnologiaCard from "@/Componente/TecnologiaCard/TecnologiaCard"
 export default function InfoPgae() {
    return(
        <>
        <h2>Página info</h2>
   
   <p>Nesta aplicação utilizamos várias tecnologias</p>

<TecnologiaCard
title="HTML"
image="html.svg"

/>

<TecnologiaCard
title="CSS"
image="css.svg"
/>

<TecnologiaCard
title="Javascript"
image="js.svg"
/>

<TecnologiaCard
title="React.js"
image="react.svg"

/>

        </>
    )
}