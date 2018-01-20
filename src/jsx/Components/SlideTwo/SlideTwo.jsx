import React, { Component } from 'react';

const SlideTwo= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/s6.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <a target="blank" href="https://google.com">
        <div style={background} className="slide fade">
            <div className="project">project two</div>
        </div></a>
}


export default SlideTwo;