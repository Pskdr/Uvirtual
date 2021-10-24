
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import area_personal from './components/area-personal';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import { Fragment } from 'react/cjs/react.production.min';

const DivImage = styled.div`
  background-position: center center;
  background-color: #f1faee;
  width: 600px;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
`;

function App() {
  const [login, actualizarLogin] = useState(true)
  return (
    <div className="divImagen">
    <Navbar/>
        
        {login ?(
                  <DivImage>
                    <Formulario
                    actualizarLogin={actualizarLogin}
                    />
                  </DivImage>
                  
          
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
