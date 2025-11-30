import Projeto from '@/Componente/Projeto/Projeto'

function DescricaoProjetos() {
  return (
    <div>
      <h2>Meus Projetos</h2>
      <p>
        Ao longo dos meus estudos e práticas em programação, desenvolvi vários 
        projetos para treinar minhas habilidades. Muitos desses projetos estão 
        publicados na minha página do GitHub Pages.
      </p>

      <p>
        Você pode ver todos os meus projetos aqui:
        <a href="https://github.com/19Kailane/19Kailane.github.io" target="_blank"> GitHub Pages</a>.
      </p>

      <h3>Alguns projetos que desenvolvi:</h3>
      <Projeto nome="Loja Virtual" url="http://127.0.0.1:3000/lab6 2/index.html?serverWindowId=5e867842-7d54-4004-acbf-0a28cf8d7ec6"/>
    </div>
  );
}
