
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ComponentePrincipal } from './Componentes/ComponentePrincipal'
import { Formulario } from './Componentes/Formulario'
import { Ticket } from './Componentes/Ticket'
function App() {
  return (
   <Routes>
    <Route path='/' element={<ComponentePrincipal/>}/>
    <Route path='/Formulario' element={<Formulario/>}/>
    <Route path='/Ticket' element={<Ticket/>}/>
   </Routes>
  );
}

export default App
