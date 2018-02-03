import React from 'react';

class About extends React.Component {
    render () {
        return (
            <section className="about" id="abo">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title">Who am I?</div>
                    </div>
                    <div className="row namePart">
                        <div className="col-6 name">
                            <div>Hello, I'm&nbsp; <span>Piotr&nbsp;Rawski</span></div>
                            <div className="row photo">
                                <div className="col-12">
                                    <div className="myphoto"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 aboTxt">
                            Tootsie roll bonbon bear claw pie. Tiramisu soufflé candy wafer lemon drops. Lollipop cookie dessert oat cake sugar plum powder muffin muffin sugar plum. Chupa chups chocolate bar brownie halvah candy lemon drops icing.
                            Cookie candy gingerbread cheesecake. Icing caramels jelly-o bonbon jelly-o jelly-o lollipop bear claw. Pie bonbon tiramisu tart brownie.</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;