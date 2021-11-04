import React from 'react'
import Header from './HeaderAreapersonal'
import styled from '@emotion/styled';
import Prueba from '../images/curso/prueba.png'
import Ordenador from '../images/curso/ordenador.png'
import Apoyo from '../images/curso/apoyo.png'
import Foro from '../images/curso/foro.png'
import Tareas from '../images/curso/lista-de-tareas.png'
import Cuestionario from '../images/curso/cuestionario.png'
import Contenido from '../images/curso/contenido.png'

const Div = styled.div`
border-radius: 200px;
width: fit-content;
background-color: #E94957;
padding: 60px;
margin: 0 auto;
color: white;
border: solid black;
`;
const Unidad = {
    borderRadius: '800px',
    border: 'solid #E94957',
    width: '10%',
    transform: 'scale(0.80)',
    backgroundColor: '#1D3557',
    color: 'white',
    padding: '10px'
}
const Circle = {
    borderRadius: '100%',
    backgroundColor: '#A8DADC',
    height: '100px',
    width: '100px', 
    border: 'solid black',
    margin: 'auto'
}
const P = styled.p`
    font-family: bold; 
    color: black;
    margin-top: 10px;
    align-items: center;
    text-align: center;

`
const Img = {
    width: '100%', 
    height: '100%',
    transform: 'scale(0.60)'
}
const Content = {
    borderRadius: '800px',
    border: 'solid #E94957',
    width: '400px',
    height: '100px',
    transform: 'scale(0.80)',
    backgroundColor: '#1D3557',
    color: 'white',
    padding: '15px'
}
const Relative = {
     alignItems: 'left', 
     alignContent: 'left', 
     position: 'absolute',
     bottom: '1px',
     right: '150px'
}

const Curso = ( actualizarCurso ) => {
    return ( 
        <div>
            
            <Header/>
            <div style={{ marginTop: '3rem', backgroundColor: 'white', height: '100px', width: '100%', margin: 'auto'}}>
            </div>
            <div style={{ marginTop: '3rem', backgroundColor: 'white', height: 'auto', width: 'auto', margin: 'auto', textAlign: 'center'}}>
            
                <Div>
                    <h2 style={{ textAlign: 'left' }}>Métodos numéricos</h2>
                    
                </Div>
                <div class="container" style={{ marginTop: '3rem'}}>
                    <div class="row">
                            <div class="col-sm" style={Unidad}>
                                <h3>Generalidades</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3>Unidad 1</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3>Unidad 2</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3>Unidad 3</h3>
                            </div>
                            
                        </div>  
                    </div>
                    <div class="container" style={{ marginTop: '3rem'}}>
                        <div class="row">
                            <div class="col-sm" >
                                <div style={Circle}>
                                    
                                    <img className="img-responsive" src={Prueba} alt="" style={Img}/>
                                </div>
                                <P>Instructivos</P>
                            </div>
                            <div class="col-sm" >
                                <div style={Circle}>
                                    <img className="img-responsive" src={Ordenador} alt="" style={Img}/>
                                </div>
                                <P>Clases sincrónicas</P>
                            </div>
                            <div class="col-sm" >
                            <div style={Circle}>
                                    <img className="img-responsive" src={Apoyo} alt="" style={Img}/>
                                </div>
                                <P>Asesoría a Estudiantes</P>
                            </div>
                            <div class="col-sm" >
                                <div style={Circle}>
                                    <img className="img-responsive" src={Foro} alt="" style={Img}/>
                                </div>
                                <P>Foros</P>
                            </div>
                            <div class="col-sm" >
                            <div style={Circle}>
                                    <img className="img-responsive" src={Tareas} alt="" style={Img}/>
                                </div>
                                <P>Tareas</P>
                            </div>
                            <div class="col-sm" >
                            <div style={Circle}>
                                    <img className="img-responsive" src={Cuestionario} alt="" style={Img}/>
                                </div>
                                <P>Cuestionarios</P>
                            </div>
                                
                        </div>  
                    </div>

                    <div class="container" style={{ marginTop: '3rem'}}>
                        <div class="row" style={Content}>
                            
                            
                            <div class="col-sm"  style={Relative}>
                                <div style={Circle}>
                                    <img className="img-responsive" src={Contenido} alt="" style={Img}/>    
                                </div>
                            </div>
                            <div className="col-sm" style={{ marginBottom: '15px'}}>
                                <h3 style={{ fontSize: '25px', marginTop: '15px', marginLeft: '70px' }}>Contenidos temáticos</h3>
                            </div>
                                
                        </div>
                    </div>

            </div>
        </div>
            
        
     );
}
 
export default Curso; 