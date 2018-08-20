import React, { Component } from 'react';

const SlideFive= (props) => {

    let background = {
        backgroundImage: 'url("./dist/images/fs.png")',
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return <a target="blank" href="https://piotrrawski.github.io/flights-schedule/">
         <div style={background} className="slide fade">
         <div className="project">Flights schedule</div>
         </div>
        </a>
}

export default SlideFive;