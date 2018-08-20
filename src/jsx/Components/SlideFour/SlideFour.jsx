import React, { Component } from 'react';

const SlideFour= (props) => {

    let background = {
        backgroundImage: 'url("./dist/images/ul.png")',
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return <a target="blank" href="https://piotrrawski.github.io/Users-list/">
         <div style={background} className="slide fade">
         <div className="project">Users List</div>
         </div>
        </a>
}

export default SlideFour;