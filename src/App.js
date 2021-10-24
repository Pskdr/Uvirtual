
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import area_personal from './components/area-personal';
import Formulario from './components/Formulario';
import { Fragment } from 'react/cjs/react.production.min';


function App() {
  const [ login, actualizarLogin ] = useState(true)
  return (
    <div className="divImagen">
    <Navbar/>
        
        {login ?(
            <div className="divImagen">
              <Formulario
                    actualizarLogin={actualizarLogin}
                    />
            </div>
                    
                  
          
         ):
            <Fragment>
              <Navbar/>
              <area_personal/>
            </Fragment>
         }
      
      </div>
    
  );
}

export default App;
