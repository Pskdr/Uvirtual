import React from 'react'

const Footer = () => {
    return ( 
        <footer className="bg-#1D3557 text-center text-white" style={{ backgroundColor: '#1D3557'}}>
        <div className="container p-4">
            <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i
            ></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i
            ></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i
            ></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i
            ></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i
            ></a>

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i
            ></a>
            </section>
            <section className="">
            </section>
            <section className="mb-4">
            <p>
            <h5>
                Educación Virtual y TIC | Universidad de Medellín
            </h5>
            </p>
            </section>
            <section className="">
                <div class="container">
                    <div class="row">
                            <div class="col-sm">
                                extras
                            </div>
                            <div class="col-sm">
                                medios de contacto
                            </div>
                            <div class="col-sm">
                                Accesos directos
                            </div>
                            
                        </div>  
                    </div>
            </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2);' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        </footer>
     );
}
 
export default Footer;