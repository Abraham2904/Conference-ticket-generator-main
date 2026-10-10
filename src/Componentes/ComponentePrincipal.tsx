import React, { useState } from 'react'
import logoTitle from '../assets/images/logo-full.svg';
import { Formulario } from './Formulario';
import { Ticket } from './Ticket';
import logo from '../assets/images/pattern-lines.svg';
import logoCircle from '../assets/images/pattern-circle.svg';
import logoTop from '../assets/images/pattern-squiggly-line-top.svg';
import logoBottom from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import logoBottomDesk from '../assets/images/pattern-squiggly-line-bottom-desktop.svg';
import '../Estilos-Componentes/ComponentePrincipal.css';
import imagenMuestra from '../../../../../../Pictures/Screenshots/Captura de pantalla 2026-09-15 122559.png';
import type { datosTicket } from '../Interface/datosTicket';
export const ComponentePrincipal = () => {
  const [mostrarTicket, setMostrarTicket] = useState(false);
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [github, setGithub] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const renderizarTicket = () => {
    setMostrarTicket(true);
  };
  const enviarDatos = ({ nombre, email, github, url }: datosTicket)=> {
      setNombre(nombre);
      setEmail(email);
      setGithub(github);
      setUrl(url);
  }
  return (
    <div>
        <div className='contenedor-principal'>
    <div className='Diseno_pagina'>
      <img src={logo} className='pattern-lines'/>
      <img src={logoCircle} className='pattern-circle'/>
      <img src={logoTop} className='pattern-top'/>
      <img src={window.screen.width < 1024 ? logoBottom : logoBottomDesk} className='pattern-bottom'/>
      <img src={logoCircle} className='pattern-circleMiddle'/>
    </div>
    <div className='info-content'>
      <div className='logo'>
        <img src={logoTitle} className='logoTitle'/>
      </div>
      {
        mostrarTicket ? <Ticket nombre={nombre} email={email} github={github} url={url} /> : <Formulario onEnviarTicket={renderizarTicket} onEnviarDatos={enviarDatos}/>
      }
    </div>
   </div>
    </div>
  )
}
