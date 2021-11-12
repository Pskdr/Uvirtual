
import React, { useState } from 'react'

import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link }  from 'react-router-dom'
import AreaPersonal from './components/AreaPersonal';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Curso from './components/Curso';


function App() {
  const [ usuario, actualizarUsuario] = useState({
    id: '',
    nombre: '',
    correo: '',
    contraseña: ''
  })
  const pageNotFound = () => {
    <div>Page not found 404 - <Link to='/login'>Home</Link></div>
  }

  return (
    <Router>
      <Redirect to='/login'/>
      <Switch>
        <Route exact path='/login' component={Formulario} />
        <Route exact path='/curso' component={Curso} />
        <Route exact path='/cursos' component={AreaPersonal} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
