import React from 'react';
import Slider from '../Slider/';

class Work extends React.Component {
    render () {
        return (
            <section className="work" id="port">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title">My work</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;

