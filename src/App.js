
import './App.css';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import AreaPersonal from './components/AreaPersonal';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Curso from './components/Curso';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Formulario} />
        <Route exact path='/curso' component={Curso} />
        <Route exact path='/cursos' component={AreaPersonal} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
