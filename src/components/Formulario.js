import React from 'react'
import { Fragment } from 'react';
import './Formulario.css'
import Form from './Form'

const Formulario = ({actualizarLogin}) => {
    return ( 
        <Fragment>
            <div className="formulario">
                <h2>Acceso a la plataforma</h2>                
                <Form
                actualizarLogin = {actualizarLogin}
                />    
            </div>
        </Fragment>
        
        
     );
}
 
export default Formulario;