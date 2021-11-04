
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import AreaPersonal from './components/AreaPersonal';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';
import Curso from './components/Curso';


function App() {
  const [ login, actualizarLogin ] = useState(true)
  const [ curso, actualizarCurso ] = useState(false)
  return (
    <div>        
        {login ?(
            <div>
              <div>                  
                <Header/>
              </div>
              <Navbar/>
              <div style={{  marginBottom: '10rem'}}>
                <Formulario
                    actualizarLogin={actualizarLogin}
                    />
            </div>
            </div>      
         ):
            curso ? (<Curso actualizarCurso={actualizarCurso}/>) : (<AreaPersonal  actualizarCurso={actualizarCurso}/>)
         }
      
      <Footer/>
      </div>
    
  );
}

export default App;
