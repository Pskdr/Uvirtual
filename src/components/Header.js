import React from 'react';
import './Header.css';
import Uvirtual from '../images/Uvirtual.png';



const Header = () => {
    return ( 
        <header >
            <a href="https://webapps.udem.edu.co/evytic/#/home"
            ><img src={Uvirtual} alt="logo_uvirtual" className="imagen"
            /></a>
        </header>
     );
}
 
export default Header;