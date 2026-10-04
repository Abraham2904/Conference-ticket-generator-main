import '../Estilos-Componentes/Ticket.css';
import logoMark from '../assets/images/logo-mark.svg';
import imageAvatar from '../assets/images/image-avatar.jpg';
import iconGithub from '../assets/images/icon-github.svg';
export const Ticket = () =>{
return (
    <div className='contenedor-ticket'>
        {/*editar Jonathan Kristof con nombre de variable*/}
        <h1>Congrats, <span>Jonathan kristof!</span> Your ticket is ready.</h1>
        <p>We're emailed your ticket to <span>jonathan@email.com</span> and will send updates in the run up to the event.</p>
        <div className='ticket'>
            <div className='part-left'>
                <div className='part-top'>
                    <img src={logoMark}/>
                    <div className='details'>
                        <h2>Coding conf</h2>
                        {/*Cambiar por varible de tiempo real*/}
                        <p>Jan 31,2025 / Austin, TX</p>
                    </div>
                </div>
                <div className='part-bottom'>
                    <img src={imageAvatar}/>
                    <div className='details'>
                        {/*Cambiar por varible de nombre*/}
                        <h2>Jonathan Kristof</h2>
                        <div className='nickname-content'>
                            <img src={iconGithub}/>
                            <p>@jonathankristof0101</p>
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