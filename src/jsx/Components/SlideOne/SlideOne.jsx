import React, { Component } from 'react';

const SlideOne= (props) => {

    let background = {
        backgroundImage: 'url("./dist/images/psd10w.png")',
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return <a target="blank" href="https://piotrrawski.github.io/10-Ways/">
         <div style={background} className="slide fade">
         <div className="project">10Ways from PSD</div>
         </div>
        </a>
}

export default SlideOne;