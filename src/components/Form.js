import React,{Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import './Form.css'


const Form = () => {
    
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: ''
    })
    const [ visibilidad, actualizarVisibilidad ] = useState(false) 

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    const esconder = e => {
        visibilidad ? actualizarVisibilidad(false) : actualizarVisibilidad(true)
    }
    return ( 
        <Fragment>
            <div class="card-body" id="yui_3_17_2_1_1636401612102_33">          
                <div class="identity_providers loginmode-box">
                    <h5 class="mt-2">Identifíquese usando su cuenta en:</h5>
                    <div class="potentialidplist">
                            <div class="potentialidp">
                                <a href="https://uvirtual.udem.edu.co/auth/oauth2/login.php?id=1&amp;wantsurl=%2F&amp;sesskey=fCEVBtYzC6" title="Cuenta Office365" class="btn btn-secondary btn-block">
                                    <img src="https://www.microsoft.com/favicon.ico" alt="" width="24" height="24"/>
                                Cuenta Office365
                                </a>
                            </div>
                    </div>
                </div>
            
                <div class="manualauth loginmode-box" id="yui_3_17_2_1_1636401612102_32">
                    <h5 class="mt-2 showmore h5" data-target=".manualauth .signup-form" id="yui_3_17_2_1_1636401612102_31" onClick={esconder}>Con nombre de usuario y contraseña <i class="fa fa-sort-down icon-showform" id="navbarDropdown" role="button" data-bs-toggle="dropdown"></i></h5>
                    {visibilidad ? (<form className='signup-form showmore-transition notshowmore' >
                        <input type="hidden" name="logintoken" value="kB4Fo7qvjC38lECULSoZSmToaPvaob1R"/>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-user add-on"></i></div>
                            <input type="text" class="form-control" id="username" name="username" value={email} onChange={onChange} placeholder="Nombre de usuario" required=""/>
                        </div>
            
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-lock add-on"></i></div>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña" value={password} onChange={onChange} required=""/>
                        </div>
            
                        <div class="sign-up-btn">
                        <Link to={'/cursos'} type="submit" class="btn btn-primary">Acceder</Link>
                        </div>
            
                        <p class="my-2"><a href="https://uvirtual.udem.edu.co/login/forgot_password.php">¿Olvidó su nombre de usuario o contraseña?</a></p>
                    </form>) : null}
                </div>
                            

            </div>
        </Fragment> 
    );
}
 
export default Form;