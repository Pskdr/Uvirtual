import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'


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

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === ''){
            console.log('Correcto')
        }else{
            console.log('No funciona')
        }
    }

    return (
        <Fragment>
            <div className="card-body" >
                <div >
                    <div className="office" >
                    <h5 className="mt-2">Identifíquese usando su cuenta en:</h5>
                        <div style={{backgroundColor: '#1D355780',borderRadius: '40px',width:'60%', margin:'auto'}}>
                            <img src="https://www.microsoft.com/favicon.ico" alt="" width="30" height="30" />
                            <Link to={'/cursos'} type="submit" className="btn"  > <h6>Cuenta Office365</h6></Link>
                        </div>
                    </div>
                </div>
                <div className="office">
                    <h6 className="mt-2 showmore h6" onClick={esconder}>Con nombre de usuario y contraseña </h6><br/>
                    {visibilidad ? (<form onSubmit={onSubmit}>
                        <input type="hidden" name="logintoken" value="kB4Fo7qvjC38lECULSoZSmToaPvaob1R" />
                        <div className="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="email"  id="email" name="email" value={email} onChange={onChange} placeholder="Nombre de usuario" />
                        </div>
                        <div className="input-group" >
                            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="" width="30" height="30" />
                            &nbsp;&nbsp;<input type="password" id="password" name="password" placeholder="Contraseña" value={password} onChange={onChange}   />
                        </div>

                        <div >
                            <Link to={'/cursos'} type="submit" className="btn btn-primary"><h6>Acceder</h6></Link>
                        </div>
                        <p className="my-2"><a href="https://uvirtual.udem.edu.co/login/forgot_password.php">¿Olvidó su nombre de usuario o contraseña?</a></p>
                    </form>) : null}
                </div>

            </div>
        </Fragment>
    );
}

export default Form;