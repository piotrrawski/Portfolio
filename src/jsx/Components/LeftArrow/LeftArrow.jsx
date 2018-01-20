import React, { Component } from 'react';

const LeftArrow = (props) => {
    return (
        <div className="backArrow">
            <div onClick={props.previousSlide} className="backArrow">
                <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default LeftArrow;