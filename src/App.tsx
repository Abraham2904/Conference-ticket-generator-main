
import './App.css'
import logo from './assets/images/pattern-lines.svg';
import logoCircle from './assets/images/pattern-circle.svg';
import logoTop from './assets/images/pattern-squiggly-line-top.svg';
import logoBottom from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import logoTitle from './assets/images/logo-full.svg';
import { Formulario } from './Componentes/Formulario';
function App() {
  return (
   <div className='contenedor-principal'>
    <div className='Diseno_pagina'>
      <img src={logo} className='pattern-lines'/>
      <img src={logoCircle} className='pattern-circle'/>
      <img src={logoTop} className='pattern-top'/>
      <img src={logoBottom} className='pattern-bottom'/>
      <img src={logoCircle} className='pattern-circleMiddle'/>
    </div>
    <div className='info-content'>
      <div className='logo'>
        <img src={logoTitle} className='logoTitle'/>
      </div>
      <Formulario />
    </div>

   </div>
  );
}

export default App
