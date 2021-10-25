import React from 'react'
import { Fragment } from 'react';
import Header from './HeaderAreapersonal'
import Carousel from './Carousel'
import Cards from './Cards'
import './areapersonal.css'


const area_personal = () => {
    return ( 
        <Fragment>
            <Header/>
            <Carousel/>
            <Cards/>
        </Fragment>
     );
};
 
export default area_personal;