import{useState} from 'react';
import image from "./assets/hashtaurante.webp";
import './App.css';
import Navegacao from "./Navegacao";
import ItemCardapio from "./ItemCardapio";
import {pratosPrincipais, sobremesas,bebidas} from "./cardapio";


export function App(){
  
  const paginaMenu = [pratosPrincipais,sobremesas,bebidas]
  const [paginaSelecionada, alterarPaginaSelecionada] = useState(0);

  return <>
         <img src={image} alt="" className="capa"/>
         <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada}/>
         <div className="menu">
          {paginaMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
         
         </div>
  
  </>
}