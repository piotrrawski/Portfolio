import React, { Component } from 'react';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide} onTouchMove={props.nextSlide} className="nextArrow">
            <div  className="fade">
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default RightArrow;