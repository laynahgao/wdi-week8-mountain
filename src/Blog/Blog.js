import React from 'react';
import Header from './Header/Header.js';
import MidSection from './MidSection/MidSection.js';
import Comment from './Comment/Comment.js';

const blog =() => {
    return(
        <div>
            <Header />
            <MidSection />
            <Comment/>
        </div>
    )
}

export default blog;
