
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
            <div style={{  marginBottom: '10rem'}}>
              <Header/>
              <Navbar/>
              <Formulario
                    actualizarLogin={actualizarLogin}
                    />
            </div>
                    
                  
          
         ):
            <AreaPersonal/>
         }
      
      <Footer/>
      </div>
    
  );
}

export default App;
