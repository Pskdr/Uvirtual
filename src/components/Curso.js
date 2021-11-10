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
import Pdf from '../images/curso/pdf.png'
import Pdfcomponent from './Pdf'
import Aviso from '../images/curso/alerta.png'
import Pregunta from '../images/curso/incertidumbre.png'
import Parcero from '../images/curso/parcero.png'

const Div = styled.div`
border-radius: 200px;
width: 600px;
height: fit-content;
background-color: #E94957;
margin: 0 auto;
color: #F1FAEE;
border: solid black;
padding: 10px;
`;
const Unidad = {
    borderRadius: '800px',
    border: 'solid #E94957',
    width: '30%',
    transform: 'scale(0.60)',
    backgroundColor: '#1D3557',
    color: '#F1FAEE',
    padding: '10px'
}
const Circle = {
    borderRadius: '100%',
    backgroundColor: '#A8DADC',
    height: '70px',
    width: '70px', 
    border: 'solid black',
    margin: 'auto'
}
const CircleFix = {
    borderRadius: '100%',
    backgroundColor: '#A8DADC',
    height: '95px',
    width: '95px', 
    border: 'solid black',
    margin: 'auto'
}
const P = styled.p`
    font-family: bold; 
    color: black;
    margin-top: 10px;
    align-items: center;
    text-align: center;
    font-size: 12px;

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
    color: '#F1FAEE',
    padding: '15px'
}
const Relative = {
     alignItems: 'left', 
     alignContent: 'left', 
     position: 'absolute',
     bottom: '3px',
     right: '160px'
}

const Pdfs = {

    borderRadius: '100%',
    backgroundColor: '#457b9d',
    height: '50px',
    width: '50px', 
    border: 'solid black'
}
const Profesor = {
    borderRadius: '100%',
    backgroundColor: 'blue',
    height: '130px',
    width: '130px',
    alignItems: 'left',
    position: 'relative',
    right: '40px',
    top: '10px'
}
const Text = {
    fontSize: '30px',
    textAlign: 'center',
    padding: '10px'
}

const Curso = ( actualizarCurso ) => {
    return (
        <div>
            <Header/>
            <div style={{ marginTop: '3rem', backgroundColor: '#F1FAEE', height: '100px', width: '100%', margin: 'auto'}}>
            </div>
            <div style={{ marginTop: '3rem', backgroundColor: '#F1FAEE', height: 'auto', width: 'auto', margin: 'auto', textAlign: 'center'}}>

                <Div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-4">
                                <h2 style={Text}>Métodos numéricos</h2>
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'right', margin: 'auto' }}>
                                <h2 style={Text}> Profesor:
                                <p style={{ color: 'white', textAlign: 'center', fontSize: '15px'}}> Chuck Norris </p> </h2>
                            </div>
                            <div className="col-md-2">
                                <img className="img-responsive" src={Parcero} alt="" style={Profesor}/>
                            </div>

                        </div>
                    </div>
                </Div>
                <div class="container" style={{ marginTop: '1rem'}}>
                    <div class="row">
                            <div class="col-sm" style={Unidad}>
                                <h3 class="title">Generalidades</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3 className='title'>Unidad 1</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3 className='title'>Unidad 2</h3>
                            </div>
                            <div class="col-sm" style={Unidad}>
                                <h3 className='title'>Unidad 3</h3>
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
                                <div style={CircleFix}>
                                    <img className="img-responsive" src={Contenido} alt="" style={Img}/>    
                                </div>
                            </div>
                            <div className="col-sm" style={{ marginBottom: '15px'}}>
                                <h3 style={{ fontSize: '25px', marginTop: '15px', marginLeft: '70px' }}>Contenidos temáticos</h3>
                            </div>
                                
                        </div>
                    </div>

                    <Pdfcomponent Pdf={Pdf} text='Interpolación' Pdfs = {Pdfs}/>                    
                    <Pdfcomponent Pdf={Pdf} text='Solución numérica de ecuaciones de una variable' Pdfs = {Pdfs}/>
                    <Pdfcomponent Pdf={Pdf} text='Solución numérica de sistemas de ecuaciones lineales' Pdfs = {Pdfs}/>
                    <Pdfcomponent Pdf={Pdf} text='Integración numércia' Pdfs = {Pdfs}/>

                    <div className="container" style={{ marginTop: '3rem', backgroundColor: '#F1FAEE', color: '' }}>
                        <div className="row">
                            <div className='col-md-2'>
                                <div style={Circle}>                                    
                                    <img className="img-responsive" src={Aviso} alt='' style={Img}/>
                                </div>
                                <P>Avisos</P>
                            </div>
                            <div className='col-md-2'>
                                <div style={Circle}>                
                                    <img className="img-responsive" src={Pregunta} alt='' style={Img}/>
                                    
                                </div>
                                <P>Preguntas</P>
                            </div>

                        </div>

                    </div>

            </div>
        </div>
            
        
     );
}
 
export default Curso; 