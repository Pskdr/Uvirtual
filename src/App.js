
import './App.css';
import React,{useState} from 'react'


import Navbar from './components/Navbar'
import { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {
const [login, actualizarLogin] = useState(true)
  //aquí se utiliza JS

  return (

    //Aqui se utiliza HTML
    <Fragment>
      <div class='divImagen'>
        
        {login ?(
        <div class='row'>
            <div class='column'></div>
            <div class='column'>
              
              <Formulario
                actualizarLogin={actualizarLogin}
              />
            </div>
            </div> ):<Navbar/>}
          
      </div>
    </Fragment>
    
  );
}

export default App;
