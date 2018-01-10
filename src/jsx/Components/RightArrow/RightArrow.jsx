import React, { Component } from 'react';

const RightArrow = (props) => {
    return (
        <div className="nextArrow">
            <div onClick={props.nextSlide} className="nextArrow">
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default RightArrow;