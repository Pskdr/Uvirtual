import React,{Fragment} from 'react'
import styled from '@emotion/styled';

const Btn = styled.button`
    margin-top: 5rem;
`;

const Form = ({ actualizarLogin }) => {

    const aceptarLogin = () => {
        actualizarLogin(false);
    }
    
    
    return ( 
        <Fragment>
            <form onSubmit={aceptarLogin}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder=""/>
                </div>
                
                <Btn type="submit" className="btn btn-primary btn-lg center btn-block">Enviar</Btn>
            </form>
        </Fragment> 
    );
}
 
export default Form;