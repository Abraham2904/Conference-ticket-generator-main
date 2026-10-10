import '../Estilos-Componentes/Formulario.css';
import iconUpload from '../assets/images/icon-upload.svg';
import iconInfo from '../assets/images/icon-info.svg';
import imageAvatar from '../assets/images/image-avatar.jpg';
import { useState, useEffect, useRef } from 'react';
import type { datosTicket } from '../Interface/datosTicket';
import imagenMuestra from '../../../../../../Pictures/Screenshots/Captura de pantalla 2026-09-14 114047.png';
interface props{
    onEnviarTicket: () => void;
    onEnviarDatos: ({nombre, email, github, url}: datosTicket) => void;
}

export const Formulario = ({ onEnviarTicket, onEnviarDatos }: props) => {
    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [github, setGithub] = useState<string>('');
    const [alertar, setAlertar] = useState<boolean>(false);
    const [alertaFile, setAlertaFile] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('');
    const inputFile = useRef<HTMLInputElement>(null);
    let contenido = <div className='input-hint'> <img className='Logo' src={iconInfo}/>
        <p>Upload your photo (JPG or PNG, max size: 500 KB).</p></div>; 
    let file;
    const URLImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(inputFile.current);
         file = e.target.files?.[0];
        if (!file){
            return
        };
        if(url){
            URL.revokeObjectURL(url);
        }
        setUrl(URL.createObjectURL(file));
        if(file){
        if(file.size/1024 > 500){
        setAlertaFile(true);
        }
        console.log('Hola');
        if(file.type !== 'image/png' && file.type !== 'image/jpg'){
         setAlertaFile(true);
        }
    }
    }
    if(alertar && !url ){
        contenido =  <div className='input-hint input-error'>
         <img className='Logo' src={iconInfo}/>
         <p>Please enter valid image</p>
         </div>
        }
    if(alertaFile){
        contenido = <div className='input-hint input-error'>
         <img className='Logo' src={iconInfo}/>
         <p>Please upload a JPG or PNG image smaller than 500 KB.</p>
         </div> 
    }
    const EliminarImagen =() =>{
        URL.revokeObjectURL(url);
                        setUrl('');
    }
    const CambiarImagen = () =>{
        inputFile.current?.click();
    }   
   return(
    <div className='Formulario'>
    <h1>Your Journey to coding conf 2025 Starts Here!</h1>
    <p>Secure your spot at next year's biggest coding conference.</p>
    <form className='formulario-datos' onSubmit={(e) => {
      e.preventDefault();
      if(nombre && email && github && url){
      onEnviarTicket();
      onEnviarDatos({ nombre, email, github, url });
      }else{
        setAlertar(true);
      }
    }}>
        <div className='content-inputAvatar'>
        <p>Upload Avatar</p>
        <label style={{borderColor: alertar && !url ?'red': alertaFile? 'red': undefined}} tabIndex={0} onClick={(e) => {
        if (url && e.target !== inputFile.current) e.preventDefault();
    }}>
             <input type='file' className='input-file'  onChange={(e) => URLImage(e)} ref={inputFile} />
            {!url ? <> 
            <div className='Logo'>
                <img src={iconUpload}/>
            </div>
            <p>Drag and drop or click to upload</p>
            </> : <><div className='Logo updated'>
                <img src={url}/>
                </div>
                <div className='btns-image'>
                    <button className='btn-image'onClick={EliminarImagen}><p>Remove Image</p></button>
                    <button className='btn-image' onClick={CambiarImagen}><p>Change Image</p></button>
                </div> </>
                }
        </label>
            {contenido}
        </div>
        <label className='label-input'>
            <p>Full Name</p>
            <input type='text'className={alertar && !nombre?'input-date input-error': 'input-date'} value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            {alertar && !nombre && (
                <div className='alerta'>
                    <img src={iconInfo}/>
                    <p>Please enter your full name.</p>
                </div>
            )}
        </label>
        <label className='label-input'>
            <p>Email Address</p>
            <input type='email'className={alertar && !email?'input-date input-error': 'input-date'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'/>
            {alertar && !email && (
                <div className='alerta'>
                    <img src={iconInfo}/>
                    <p>Please enter a valid email address.</p>
                </div>
            )}
        </label>
        <label className='label-input'>
            <p>GitHub UserName</p>
            <input type='text'className={alertar && !github?'input-date input-error': 'input-date'} value={github} onChange={(e) => setGithub(e.target.value)} placeholder='@yourusername'/>
            {alertar && !github && (
                <div className='alerta'>
                    <img src={iconInfo}/>
                    <p>Please enter your GitHub username.</p>
                </div>
            )}
        </label>
        <button className='btn_generate' type='submit'>Generate my ticket</button>
    </form>
    </div>
   );
}