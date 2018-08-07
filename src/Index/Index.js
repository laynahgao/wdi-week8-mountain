import React from 'react';
import Header from './Header/Header.js';
import Archive from './Archive/Archive.js';
import About from './About/About.js';
import Gallery from './Gallery/Gallery.js';
import Comment from './Comment/Comment.js';

const index =() => {
    return(
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery/>
            <Comment/>
        </div>
    )
}

export default index;
