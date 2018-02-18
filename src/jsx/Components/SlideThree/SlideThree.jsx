import React, { Component } from 'react';

const SlideThree= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/cg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center'
    }

    return <a target="blank" href="https://piotrrawski.github.io/Collector-game/">
        <div style={background} className="slide fade">
            <div className="project">Collector Game</div>
        </div>
    </a>
}
export default SlideThree;