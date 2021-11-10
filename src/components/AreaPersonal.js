import React from 'react'
import Header from './HeaderAreapersonal'
import Carousel from './Carousel'
import Cards from './Cards'
import './areapersonal.css'
import styled from '@emotion/styled';

const Div = styled.div`
    background-color: #F1FAEE;
    background-image: url("/src/images/white.png");
`;

const AreaPersonal = () => {
    return ( 
        <Div>
            <Header/><br/>
            <Carousel/>
            <Cards/>
        </Div>
     );
};
 
export default AreaPersonal;