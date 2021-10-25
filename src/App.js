
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import AreaPersonal from './components/AreaPersonal';
import Formulario from './components/Formulario';
import Header from './components/Header';


function App() {
  const [ login, actualizarLogin ] = useState(true)
  return (
    <div>
        
        
        {login ?(
            <div>
              <Header/>
              <Navbar/>
              <Formulario
                    actualizarLogin={actualizarLogin}
                    />
            </div>
                    
                  
          
         ):
            <AreaPersonal/>
         }
      
      </div>
    
  );
}

export default App;
