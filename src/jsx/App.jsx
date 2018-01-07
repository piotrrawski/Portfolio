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
                    <div className="col-6">I,m <span>Piotr Rawski</span></div>
                    <div className="col-6">
                        Tootsie roll bonbon bear claw pie. Tiramisu soufflé candy wafer lemon drops. Lollipop cookie dessert oat cake sugar plum powder muffin muffin sugar plum. Chupa chups chocolate bar brownie halvah candy lemon drops icing.
                        Cookie candy gingerbread cheesecake. Icing caramels jelly-o bonbon jelly-o jelly-o lollipop bear claw. Pie bonbon tiramisu tart brownie.</div>
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