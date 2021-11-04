import React from 'react'
import icono from '../images/98cbb0c011fcc827ae27947c3b95cb35.jpg'
import styled from '@emotion/styled';
import './areapersonal.css'

const Img = styled.img`
    width: auto;
    height: auto;

`


const HeaderAreaPersonal = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-#1D3557" style={{ backgroundColor: '#1D3557'}}>
              <div className="container-fluid" style={{color:  '#f1faee'}}>
                <a className="navbar-brand" href="/" style={{color: '#e94957', fontWeight: 'bold'}}>Uvirtual</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Calendario</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mis cursos
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/curso#">Curso 1</a></li>
                        <li><a className="dropdown-item" href="/curso#">Curso 2</a></li>
                        <li><a className="dropdown-item" href="/curso#">Curso 3</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/home">Salir</a></li>
                      </ul>
                    </li>
                    
                  </ul>
                  <a classNameName="navbar-brand" href="/">
                    <Img classNameName="rounded-circle" src={icono} style={{ borderRadius: '100%' }} alt=""/>
                  </a>
                </div>
              </div>
            </nav>
          </header>
     );
}
 
export default HeaderAreaPersonal;