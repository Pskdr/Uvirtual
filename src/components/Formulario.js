import React from 'react'
import { Fragment } from 'react';
import './Formulario.css'
import logo from '../images/iniciarSesionOutlook.jpeg'
import Form from './Form'

const Formulario = ({actualizarLogin}) => {
    return ( 
        <Fragment>
            
            <div class="card text-center">
                <div class="card-header">
                    <h1>Accede a la plataforma</h1>
                </div>
                <div class="card-body">
                    
                    <Form/>
                </div>
                <div class="card-footer text-muted">
                <button type="button" class="btn btn-secondary">Acceder como invitado</button>
                </div>
            </div>
        </Fragment>
        
        
     );
}
 
export default Formulario;