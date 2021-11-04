import React from 'react'
import Header from './HeaderAreapersonal'
import Carousel from './Carousel'
import Cards from './Cards'
import './areapersonal.css'
import styled from '@emotion/styled';

const Div = styled.div`
    background-color: #fff;
    background-image: url("/src/images/white.png");
`;

const AreaPersonal = ({ actualizarCurso }) => {
    return ( 
        <Div>
            <Header/>
            <Carousel/>
            <Cards actualizarCurso={actualizarCurso}/>
        </Div>
     );
};
 
export default AreaPersonal;