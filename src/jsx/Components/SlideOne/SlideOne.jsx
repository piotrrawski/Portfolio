import React, { Component } from 'react';

const SlideOne= (props) => {

    let background = {
        backgroundImage: 'url("./dist/images/react.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideOne;