import React from 'react';

import SlideOne from '../SlideOne/';
import SlideTwo from '../SlideTwo/';
import SlideThree from '../SlideThree/';
import SlideFour from '../SlideFour/';
import SlideFive from '../SlideFive/';

import LeftArrow from '../LeftArrow/';
import RightArrow from '../RightArrow/';

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

    }

    nextSlide() {
        this.setState({ slideCount: this.state.slideCount + 1 })
        if (this.state.slideCount > 4) {
            console.log('+3')
            this.setState({slideCount: 1})
        }
    }

    previousSlide() {
        this.setState({ slideCount: this.state.slideCount - 1 })
        if (this.state.slideCount < 2) {
            console.log('+3')
            this.setState({slideCount: 3})
        }
    }

    render() {
        return (
            <div className="slider">
                <LeftArrow previousSlide={this.previousSlide} />

                { this.state.slideCount === 1 ? <SlideOne /> : null }
                { this.state.slideCount === 2 ? <SlideTwo /> : null }
                { this.state.slideCount === 3 ? <SlideThree /> : null }
                { this.state.slideCount === 4 ? <SlideFour /> : null }
                { this.state.slideCount === 5 ? <SlideFive /> : null }

                {/*<div className='arrows'>*/}
                    <RightArrow nextSlide={this.nextSlide} />
                {/*</div>*/}
            </div>
        )
    }
}

export default Slider;