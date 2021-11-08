import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'


const Form = () => {    
    return ( 
        <Fragment>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/>
                </div>
                
                <Link to={'/cursos'} type="submit" className="btn btn-primary btn-lg center btn-block" style={{ marginTop: '5rem'}}>Enviar</Link>
            </form>
        </Fragment> 
    );
}
 
export default Form;