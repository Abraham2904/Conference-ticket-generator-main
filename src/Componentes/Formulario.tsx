import '../Estilos-Componentes/Formulario.css';
import iconUpload from '../assets/images/icon-upload.svg';
import iconInfo from '../assets/images/icon-info.svg';
import { useState } from 'react';
interface props{
    onEnviarTicket: () => void;
    onEnviarDatos: (nombre: string, email: string, github: string) => void;
}
export const Formulario = ({ onEnviarTicket, onEnviarDatos }: props) => {
    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [github, setGithub] = useState<string>('');
   return(
    <div className='Formulario'>
    <h1>Your Journey to coding conf 2025 Starts Here!</h1>
    <p>Secure your spot at next year's biggest coding conference.</p>
    <form className='formulario-datos' onSubmit={(e) => {
      e.preventDefault();
      onEnviarTicket();
    }}>
        <div className='content-inputAvatar'>
        <p>Upload Avatar</p>
        <label>
            <input type='file' className='input-file'/>
            <div className='Logo'>
                <img src={iconUpload}/>
            </div>
            <p>Drag and drop or click to upload</p>
        </label>
        <div className='input-hint'>
            <img className='Logo' src={iconInfo}/>
            <p>Upload your photo (JPG or PNG, max size: 500 KB).</p>
        </div>
        </div>
        <label className='label-input'>
            <p>Full Name</p>
            <input type='text'className='input-name'/>
        </label>
        <label className='label-input'>
            <p>Email Address</p>
            <input type='email'className='input-email' placeholder='example@email.com'/>
        </label>
        <label className='label-input'>
            <p>GitHub UserName</p>
            <input type='text'className='input-name' placeholder='@yourusername'/>
        </label>
        <button className='btn_generate' type='submit'>Generate my ticket</button>
    </form>
    </div>
   );
}