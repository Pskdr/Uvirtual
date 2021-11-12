import React, { Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import axios from 'axios'




const Form = () => {
    let paginaDestino = "/"
    const [usuario, guardarUsuario] = useState({
        correo: '',
        contrasena: ''
    })
    const [visibilidad, actualizarVisibilidad] = useState(false)

    const [usuarioFinal, actualizarUsuarioFinal] = useState({
        correo: '',
        contrasena: ''
    })

    const { correo, contrasena } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const esconder = e => {
        visibilidad ? actualizarVisibilidad(false) : actualizarVisibilidad(true)
    }

    const onSubmit = e => {
        e.preventDefault();
        if(correo === '' || contrasena === ''){
            actualizarUsuarioFinal(usuario);
            console.log('Correcto')
        }else{
            console.log('No funciona')
        }
    }
    useEffect(() => {
        const llamarAPI = async () =>{
           //evitamos la primera ejecucion
     
           //consultar la api
            
           const url = `http://localhost:3001/estudiantes/obtenerEstudiante`;
     
           const resultado = await axios.get(url);

           if(resultado.resultado === "true"){
                paginaDestino = '/cursos';
                document.getElementById('acceso').onClick()
           } else {
                paginaDestino = '/login';
                document.getElementById('acceso').onClick()
           }
           return paginaDestino;
        }
        llamarAPI();
     
       }, [usuarioFinal])

    return (
        <Fragment>
            <div className="card-body" >
                <div >
                    <div className="office" >
                    <h5 className="mt-2">Identifíquese usando su cuenta en:</h5>
                        <a href="/" title="Cuenta Office365"  >
                            <img src="https://www.microsoft.com/favicon.ico" alt="" width="30" height="30" />
                            Cuenta Office365  </a>
                    </div>
                </div>
                <div className="office">
                    <h6 className="mt-2 showmore h6" onClick={esconder}>Con nombre de usuario y contraseña </h6><br/>
                    {visibilidad ? (<form onSubmit={onSubmit}>
                        <input type="hidden" name="logintoken" value="kB4Fo7qvjC38lECULSoZSmToaPvaob1R" />
                        <div className="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="correo"  id="correo" name="correo" value={correo} onChange={onChange} placeholder="Nombre de usuario" />
                        </div>
                        <div className="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="contrasena" id="contrasena" name="contrasena" placeholder="Contraseña" value={contrasena} onChange={onChange}   />
                        </div>

                        <div >
                            <button type="submit" className="btn btn-primary">Acceder</button>
                            <Link id='acceso'  to={paginaDestino}></Link>
                        </div>
                        <p className="my-2"><a href="https://uvirtual.udem.edu.co/login/forgot_password.php">¿Olvidó su nombre de usuario o contraseña?</a></p>
                    </form>) : null}
                </div>

            </div>
        </Fragment>
    );
}

export default Form;