import image from "./assets/hashtaurante.webp";
import './App.css';
import Navegacao from "./Navegacao";

export function App(){

  return <>
         <img src={image} alt="" className="capa"/>
         <Navegacao></Navegacao>
  
  </>
}