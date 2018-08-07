import React, { Component } from 'react';
import Article from './Article/Article';
import AboutUs from './AboutUs/AboutUS';
import './Midsection.css';

const midsection = () => {
    return(
        <div class="wrap grid-wrapper">
        <Article/>
        <AboutUs/>
        </div>
    )
}
export default midsection;