import React from 'react'
import curso1 from '../images/azulClaro.png'
import curso2 from '../images/azulClaro2.png'
import curso3 from '../images/azulOscuro.png'
import curso4 from '../images/azulClaro3.png'
import './areapersonal.css'
import { Link } from 'react-router-dom'

const Cards = () => {
    const imgStyle = {
        width: 140,
        height: 140
    }
    const divStyle = {
        textAlign: 'center'
    }

    
    
    return ( 
        <div className="container" style={{alignItems: 'center', display: 'flex', marginTop: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            <div className="row">
              <div className='column col-lg-4' style={divStyle}>
                
              <Link to={'/curso'}> <img className="bd-placeholder-img rounded-circle img" style={imgStyle} alt='' src={curso1}/><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></Link>
          
                <h2 style={{textAlign: 'center'}}>Curso 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p><a className="btn btn-secondary" href="/">ir »</a>
                
              </div>
              <div className='column col-lg-4' style={{textAlign: 'center'}}>
                
              <Link to={'/curso'}><img className="bd-placeholder-img rounded-circle img" alt='' style={imgStyle} href="/" src={curso2} /><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></Link>
                <h2>Curso 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur </p> <a className="btn btn-secondary" href="/">ir »</a>
                
              </div>
              <div className='column col-lg-4' style={divStyle}>
                
              <Link to={'/curso'}><img className="bd-placeholder-img rounded-circle img" style={imgStyle} alt='' href="/" src={curso3} /><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></Link>
                <h2>Curso 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur </p>  <a className="btn btn-secondary" href="/">ir »</a>
                
              </div>

              <div className='column col-lg-4' style={divStyle}>
              <Link to={'/curso'}><img className="bd-placeholder-img rounded-circle img" style={imgStyle} href="/" alt='' src={curso4} /><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></Link>
                  <h2>Curso 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur </p>  <a className="btn btn-secondary" href="/">ir »</a>
                
              </div>
                
            </div>
        </div>

     );
}
 
export default Cards;