import React, { Component } from 'react';

const LeftArrow = (props) => {
    return (
        <div onClick={props.previousSlide} onTouchMove={props.previousSlide} className="backArrow">
            <div  className="fade">
                <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default LeftArrow;