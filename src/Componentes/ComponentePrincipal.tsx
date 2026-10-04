import React, { useState } from 'react'
import logoTitle from '../assets/images/logo-full.svg';
import { Formulario } from './Formulario';
import { Ticket } from './Ticket';
import logo from '../assets/images/pattern-lines.svg';
import logoCircle from '../assets/images/pattern-circle.svg';
import logoTop from '../assets/images/pattern-squiggly-line-top.svg';
import logoBottom from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import '../Estilos-Componentes/ComponentePrincipal.css';
export const ComponentePrincipal = () => {
  const [mostrarTicket, setMostrarTicket] = useState(false);
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [github, setGithub] = useState<string>('');
  const renderizarTicket = () => {
    setMostrarTicket(true);
  };
  const enviarDatos = (nombre: string, email: string, github: string) => {
    setNombre(nombre);
    setEmail(email);
    setGithub(github); 
  }
  return (
    <div>
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
      {
        mostrarTicket ? <Ticket /> : <Formulario onEnviarTicket={renderizarTicket}/>
      }
    </div>
   </div>
    </div>
  )
}
