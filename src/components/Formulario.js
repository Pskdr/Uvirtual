import React from 'react'
import { Fragment } from 'react';
import './Formulario.css'
import Form from './Form'
import Header from './Header'
import Navbar from './Navbar'

const Formulario = () => {
    return ( <Fragment >
        <Header / >
        <Navbar / >
        <div className = "formulario card d-lg-block"
        style = {
            { marginBottom: '15rem' } } >
        <h2>Acceso a la Plataforma </h2>
        <Form / >
        </div>
        </Fragment>
    );
}

export default Formulario;