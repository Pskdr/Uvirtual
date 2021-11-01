
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import AreaPersonal from './components/AreaPersonal';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [ login, actualizarLogin ] = useState(true)
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
            <AreaPersonal/>
         }
      
      <Footer/>
      </div>
    
  );
}

export default App;
