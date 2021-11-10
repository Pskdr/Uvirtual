import React from 'react';
import LogoUdem from '../images/LogoUdem.png';
import './nav.css';
import UvirtualAbiertaLogo from '../images/UvirtualAbiertaLogo.png';
import UvirtualInvestigación from '../images/uvirtual ivnestigacion.png';
import whatsapp from '../images/whatsapp.png';

const Navbar = () => {
    return (
      <nav className='navar'>
        <a href="https://udemedellin.edu.co/" target="_blank" rel="noreferrer">
          <img class="n" src={LogoUdem} alt="logo_Udem" />
        </a>
        <a href="https://uvirtualabierta.udem.edu.co/" target="_blank" rel="noreferrer"
            ><img class="n" src={UvirtualAbiertaLogo} alt="logo_Uabierta"/>
        </a>
        <a
          href="https://uvirtualinvestigacion.udem.edu.co/my/"
          target="_blank" rel="noreferrer"
          >
          <img class="n"
              src={UvirtualInvestigación}
              alt="logo_contacto-correo"/>
        </a>
        <a
            href="https://wa.me/573023131783?text=Requerimiento%20de%20soporte%20para%20UVirtual"
            target="_blank" rel="noreferrer">
            <img class="n" src={whatsapp} alt="logo_whatsapp"/>
        </a>
      </nav>
    );
}

export default Navbar;