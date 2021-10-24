import React,{Fragment} from 'react'
import styled from '@emotion/styled';

const btn = styled.button`
    margin-top: 5rem;
`;

const Form = () => {
    return ( 
        <Fragment>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                
                <btn type="submit" class="btn btn-primary btn-lg center btn-block">Enviar</btn>
            </form>
        </Fragment> 
    );
}
 
export default Form;