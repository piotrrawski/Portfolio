import React, { Component } from 'react';

const SlideOne= (props) => {

    let background = {
        backgroundImage: 'url("./dist/images/s1.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <a target="blank" href="https://google.com">
         <div style={background} className="slide fade">
         <div className="project">project one</div>
         </div>
        </a>
}

export default SlideOne;