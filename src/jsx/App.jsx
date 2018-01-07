console.log('hello');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



class ViewOne extends React.Component {
    render () {
        return (
            <div className="background">
                <Header />
                <Quote />
                <div></div>
            </div>
        )
    }
}

class ViewTwo extends React.Component {
    render () {
        return (
            <About />

        )
    }
}

class ViewThree extends React.Component {
    render () {
        return (
            <Skills/>
        )
    }
}

class Header extends React.Component {
    render() {
        return (

            <header>
                <section className="row">
                    <div className="col-6 logo">Piotr Rawski</div>
                    <div className="col-6 menu"><Menu /></div>
                </section>
            </header>
        )
    }
}

class Menu extends React.Component {
    render () {
        return (
            <ul>
                <li><a href="/">Contact</a></li>
                <li><a href="/">My work</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">About</a></li>
            </ul>
        )
    }
}

class Quote extends React.Component {
    render (){
        return (
            <section className="quote">
                <div className="row">
                <div className="col-6">Topping pie powder jelly-o toffee ice cream. <span>Chocolate</span> cake pudding soufflé toffee bear claw. Pudding cookie lemon drops wafer lemon drops.
                </div>
            </div>
            </section>
        )
    }
}

class About extends React.Component {
    render () {
        return (
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12">Who am I?</div>
                    </div>
                    <div className="row">
                    <div className="col-6 name">
                        <div>Hello, I'm&nbsp; <span>Piotr Rawski</span></div>
                        <div className="row photo">
                            <div className="col-12">
                                <div className="myphoto"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        Tootsie roll bonbon bear claw pie. Tiramisu soufflé candy wafer lemon drops. Lollipop cookie dessert oat cake sugar plum powder muffin muffin sugar plum. Chupa chups chocolate bar brownie halvah candy lemon drops icing.
                        Cookie candy gingerbread cheesecake. Icing caramels jelly-o bonbon jelly-o jelly-o lollipop bear claw. Pie bonbon tiramisu tart brownie.</div>
                </div>
                    {/*<div className="row photo">*/}
                        {/*<div className="col-6">*/}
                            {/*<div className="myphoto"></div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </section>
        )
    }
}

class Skills extends React.Component {
    render () {
        return (
            <section className="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-4 html">HTML</div>
                        <div className="col-4 css">CSS</div>
                        <div className="col-4 js">JAVASCRIPT</div>
                    </div>
                    <div className="row">
                        <div className="col-4 es6">ES6</div>
                        <div className="col-4 react">REACT</div>
                        <div className="col-4 jquery">JQUERY</div>
                    </div>
                    <div className="row">
                        <div className="col-4 sass">SASS</div>
                        <div className="col-4 rwd">RWD</div>
                        <div className="col-4 git">GIT</div>
                    </div>
                </div>
            </section>
        )
    }
}


class App extends React.Component {
    render () {
        return (
            <div>
                <ViewOne/>
                <ViewTwo/>
                <ViewThree/>
            </div>
        )
}
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});