import React, { Component } from 'react';

const SlideThree= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/s4.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <a target="blank" href="https://google.com">
        <div style={background} className="slide fade">
            <div className="project">project three</div>
        </div>
    </a>
}
export default SlideThree;