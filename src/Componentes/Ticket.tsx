import '../Estilos-Componentes/Ticket.css';
import logoMark from '../assets/images/logo-mark.svg';
import imageAvatar from '../assets/images/image-avatar.jpg';
import iconGithub from '../assets/images/icon-github.svg';
import type { datosTicket } from '../Interface/datosTicket';
export const Ticket = ({ nombre, email, github, url }: datosTicket) =>{
const ahora = new Date();
return (
    <div className='contenedor-ticket'>
        {/*editar Jonathan Kristof con nombre de variable*/}
        <h1>Congrats, <span>{nombre}!</span> Your ticket is ready.</h1>
        <p>We're emailed your ticket to <span>{email}</span> and will send updates in the run up to the event.</p>
        <div className='ticket'>
            <div className='part-left'>
                <div className='part-top'>
                    <img src={logoMark}/>
                    <div className='details'>
                        <h2>Coding conf</h2>
                        {/*Cambiar por varible de tiempo real*/}
                        <p>{ahora.toLocaleString()}</p>
                    </div>
                </div>
                <div className='part-bottom'>
                    <img src={url}/>
                    <div className='details'>
                        {/*Cambiar por varible de nombre*/}
                        <h2>{nombre}</h2>
                        <div className='nickname-content'>
                            <img src={iconGithub}/>
                            <p>{github}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='part-right'>
                <h2>#01609</h2>
            </div>
        </div>
    </div>
);
}