import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
//import router from '../../UvirtualAPI/Routes'
// const router = require("router")


const Form = () => {
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    const [visibilidad, actualizarVisibilidad] = useState(false)

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const esconder = e => {
        visibilidad ? actualizarVisibilidad(false) : actualizarVisibilidad(true)
    }
    return (
        <Fragment>
            <div class="card-body" >
                <div >
                    <div class="office" >
                    <h5 class="mt-2">Identifíquese usando su cuenta en:</h5>
                        <a href="" title="Cuenta Office365" >
                            <img src="https://www.microsoft.com/favicon.ico" alt="" width="30" height="30" />
                            Cuenta Office365  </a>
                    </div>
                </div>
                <div class="office">
                    <h6 class="mt-2 showmore h6" onClick={esconder}>Con nombre de usuario y contraseña </h6><br/>
                    {visibilidad ? (<form>
                        <input type="hidden" name="logintoken" value="kB4Fo7qvjC38lECULSoZSmToaPvaob1R" />
                        <div class="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="text"  id="username" name="username" value={email} onChange={onChange} placeholder="Nombre de usuario" required="" />
                        </div>
                        <div class="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="password" id="password" name="password" placeholder="Contraseña" value={password} onChange={onChange} required=""  />
                        </div>

                        <div >
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