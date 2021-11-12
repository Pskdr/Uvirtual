import React from "react";
import UvirtualInvestigación from '../images/ivnestigacion.png';
import UAbierta from '../images/UvirtualAbiertaLogo.png';
import Consultas from '../images/Consultas.png';

const Footer = () => {
    return (
        <footer
            className="bg-#1D3557 text-center text-white"
            style={{ backgroundColor: "#1D3557", marginTop: '15rem' }}
        >
            <div className="container p-3">
                <section className=""></section>
                <section className="mb-4">
                        <h5>Educación Virtual y TIC | Universidad de Medellín</h5>
                </section>
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col"><h6>Enlaces directos</h6>
                                <a  href="https://www.udem.edu.co/index.php/servicios/sello-editorial"  title="Sello Editorial" >
                                <img src="https://img.icons8.com/doodle/48/000000/books.png"width="30" height="30" alt=''/>
                                Sello Editorial</a><br/>
                                <a href="https://biblioteca.udemedellin.edu.co/"  title="Biblioteca" >
                                <img src="https://img.icons8.com/color/48/000000/open-book--v2.png"width="30" height="30" alt=''/>
                                Biblioteca</a><br/>
                                <a href="https://udem.edu.co/index.php/servicios/centro-de-tecnologia-para-la-innovacion-y-el-aprendizaje"  title="Reservas de Software" >
                                <img src="https://cdn-icons-png.flaticon.com/512/2209/2209817.png" width="30" height="30" alt=''/>
                                Reservas de Software</a><br/>
                            </div>
                            <div className="col"><h6>Contacto</h6>
                                <a href="https://wa.me/573023131783?text=Requerimiento%20de%20soporte%20para%20UVirtual"  title="Whatsapp" >
                                <img src="https://img.icons8.com/doodle/48/000000/whatsapp.png"width="20" height="20" alt=''/>
                                Whatsapp</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://instagram.com/udemedellin/"  title="Instagram" >
                                <img src="https://img.icons8.com/doodle/48/000000/instagram--v1.png" width="20" height="20" alt=''/>
                                Instagram</a><br/>
                                <a href="https://twitter.com/udemedellin_"  title="Twitter" >
                                <img src="https://img.icons8.com/doodle/96/000000/twitter-circled.png" width="20" height="20" alt='' />
                                Twitter</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.youtube.com/user/CPTVUdeM/videos"  title="Youtube" >
                                <img src="https://img.icons8.com/doodle/48/000000/youtube--v1.png" width="20" height="20" alt='' />
                                Youtube</a><br/>
                                <a href="https://es-la.facebook.com/umedellin"  title="Facebook" >
                                <img src="https://img.icons8.com/doodle/48/000000/facebook-circled.png" width="20" height="20"  alt=''/>
                                Facebook</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="mailto:uvirtual@udem.edu.co"  title="Correo" >
                                <img src="https://img.icons8.com/doodle/48/000000/mailbox-closed-flag-up.png" width="20" height="20" alt='' />
                                Correo</a><br/>
                                <a href="https://ul.waze.com/ul?preview_venue_id=186384446.1863778927.328408&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
                                  title="Dirección" >
                                <img src="https://cdn-icons-png.flaticon.com/512/3771/3771649.png" width="20" height="20" alt='' />
                                Carrera 87 N° 30 – 65, Medellín–Colombia</a><br/>
                            </div>
                            <div className="col"><h6>Sitios interés</h6>
                                <a href="https://uvirtualabierta.udem.edu.co/"  title="UAbierta"  >
                                <img src={UAbierta} width="150" alt='' />
                                </a>&nbsp;&nbsp;
                                <a href="https://uvirtualinvestigacion.udem.edu.co/my/"  title="UInvestigación"  >
                                <img src={UvirtualInvestigación} width="150" alt=''/>
                                </a>
                                <a href="https://udemedellin.edu.co/"  title="UDEM.COM"  >
                                <img src="https://udemedellin.edu.co/wp-content/uploads/2021/02/logo_udemedellin2.png" width="150" alt=''/>
                                </a>&nbsp;&nbsp;
                                <a href="https://app.udem.edu.co/ConsultasServAcadem/"  title="Consultas y Servicios"  >
                                <img src={Consultas}  width="150" alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            Institución de educación superior sujeta a la inspección y vigilancia del Ministerio de Educación Nacional.<br/>
            <a   href="https://udemedellin.edu.co/politica-para-el-manejo-y-tratamiento-de-datos-personales/"> Política para el Manejo y Tratamiento de Datos Personales.</a>
            <div className="text-center p-3">
            © Copyright 2021 ® Todos los Derechos Reservados:
                <a className="text-white" href="/">
                    {" "}
                     Groot Geek
                </a>
            </div>
        </footer>
    );
};

export default Footer;
