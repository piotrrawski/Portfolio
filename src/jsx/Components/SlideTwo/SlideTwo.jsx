import React, { Component } from 'react';

const SlideTwo= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/js.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}


export default SlideTwo;