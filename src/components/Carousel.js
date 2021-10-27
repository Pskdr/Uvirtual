import React from 'react'
import banner1 from '../images/BANNER_ESTUDIANTES_CAMPUS_VIVO_EVALUACION_DOCENTE_PRE_POS_UdeMedellin_2021.png'
import banner2 from '../images/banner_interno_titulos_electronicos_udemedellin.jpg'
import banner3 from '../images/BANNER_ESTUDIANTES_UdeMedellin_2021.png'

const Carousel = () => {

    const stilos = {
        marginTop: '3rem',
        backgroundColor: '#f1faee'
    }
    return (
        
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={stilos}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     );
}
 
export default Carousel;