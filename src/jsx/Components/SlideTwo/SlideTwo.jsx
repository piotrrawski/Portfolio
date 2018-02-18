import React, { Component } from 'react';

const SlideTwo= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/ms.png)',
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return <a target="blank" href="https://piotrrawski.github.io/Moviesearcher/gi">
        <div style={background} className="slide fade">
            <div className="project">Movie Searcher</div>
        </div></a>
}


export default SlideTwo;