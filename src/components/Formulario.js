import React from 'react'
import { Fragment } from 'react';
import './Formulario.css'
import logo from '../images/iniciarSesionOutlook.jpeg'
import Form from './Form'

const Formulario = ({actualizarLogin}) => {
    //aquí se utiliza JS
    return ( 
        //Aquí se utiliza HTML
        <Fragment>
            
            <div class="card text-center">
                <div class="card-header">
                    <h1>Accede a la plataforma</h1>
                </div>
                <div class="card-body">
                    <h5 class="card-title"><a title='Login' href="https://uvirtual.udem.edu.co/auth/oauth2/login.php?id=1&wantsurl=%2F&sesskey=sGcqAqryFW"><img src={logo} alt="Logo"/></a>
                    </h5>
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