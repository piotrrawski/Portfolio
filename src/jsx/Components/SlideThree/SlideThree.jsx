import React, { Component } from 'react';

const SlideThree= (props) => {

    let background = {
        backgroundImage: 'url(./dist/images/css.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}
export default SlideThree;