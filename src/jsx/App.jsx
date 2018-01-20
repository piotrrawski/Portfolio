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
import SlideOne from './Components/SlideOne/';
import SlideTwo from './Components/SlideTwo/';
import SlideThree from './Components/SlideThree/';
import LeftArrow from './Components/LeftArrow/';
import RightArrow from './Components/RightArrow/';



class ViewOne extends React.Component {
    render () {
        return (
            <div className="background">
                <Header />
                <Quote />
                <div></div>
                <Cookies/>
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

class ViewFour extends React.Component {
    render () {
        return (
            <Work/>
        )
    }
}

class ViewFive extends React.Component {
    render () {
        return (
            <Contact/>
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
         /*   <ul>
                <li><a href="/">Contact</a></li>
                <li><a href="/">My work</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">About</a></li>
            </ul>*/

        <ul className="snip1189">
            <li><a href="#cont">Contact</a></li>
            <li><a href="#port">My work</a></li>
            <li><a href="#skillss">Skills</a></li>
            <li><a href="#abo">About</a></li>
            <li><a href="#">Home</a></li>
        </ul>
        )
    }
}

class Quote extends React.Component {
    render (){
        return (
            <section className="quote">
                <div className="row">
                    <div className="col-6">Every great developer you know got there by <span>solving</span> problems they were unqualified to solve until they actually did it.
                </div>
            </div>
            </section>
        )
    }
}

class Cookies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenClass: ""
        }
    }
    handleClick = () => {
        console.log('click')
        console.log(this.state.hiddenClass)
        this.setState({
            hiddenClass: "none",
    })
    }

    render (){
        return (
            <div id="cookies" style={{display:this.state.hiddenClass}}>
                <div className="txt">By continuing to browse our site you agree to our use of cookies</div>
                <div className="exit" onClick={this.handleClick}>OK</div>
            </div>
        )
    }
}

class About extends React.Component {
    render () {
        return (
            <section className="about" id="abo">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title">Who am I?</div>

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
                    <div className="col-6 aboTxt">
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
            <section className="skills" id="skillss">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title">Skills</div>

                    </div>
                    <div className="row">
                        <div className="col-4 html"><figure className="skill">
                            <img src="dist/images/HTML5_Badge_512.png" alt="html" />
                            <figcaption><i>html</i></figcaption>
                        </figure></div>
                        <div className="col-4 css"><figure className="skill"><img src="dist/images/css.png" alt="css" />
                            <figcaption><i>css</i></figcaption>
                        </figure></div>
                        <div className="col-4 rwd"><figure className="skill"><img src="dist/images/rwd.png" alt="rwd" />
                            <figcaption><i>rwd</i></figcaption>
                        </figure></div>
                    </div>
                    <div className="row">
                        <div className="col-4 js"><figure className="skill"><img src="dist/images/js.png" alt="js" />
                            <figcaption><i>javascript</i></figcaption>
                        </figure></div>
                        <div className="col-4 react"><figure className="skill"><img src="dist/images/react.png" alt="react" />
                            <figcaption><i>react</i></figcaption>
                        </figure></div>
                        <div className="col-4 es6"><figure className="skill"><img src="dist/images/es6.png" alt="es6" />
                            <figcaption><i>es6</i></figcaption>
                        </figure></div>
                    </div>
                    <div className="row last">
                        <div className="col-4 jquery"><figure className="skill"><img src="dist/images/jquery.png" alt="jquery" />
                            <figcaption><i>jquery</i></figcaption>
                        </figure></div>
                        <div className="col-4 sass"><figure className="skill"><img src="dist/images/sass.png" alt="sass" />
                            <figcaption><i>sass</i></figcaption>
                        </figure></div>
                        <div className="col-4 git"><figure className="skill"><img src="dist/images/git.png" alt="git" />
                            <figcaption><i>git</i></figcaption>
                        </figure></div>
                    </div>
                </div>
            </section>
        )
    }
}

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

class Contact extends React.Component {
    render () {
        return (
            <section className="contact" id="cont">
                <div className="container one">
                    <div className="row">
                        <div className="col-12 title">Contact Me</div>
                    </div>
                    <div className="row">
                        <h1 className="col-12 contactName">Piotr Rawski</h1>
                        <div className="col-12">
                            <a href="mailto:piotr.rawski@gmail.com"><img className="icon" src="dist/images/envelope-2.svg"></img></a>
                            <a href="tel:+48-664-099-212"><img className="icon" src="dist/images/github-logo-2.svg"></img></a>
                            <a href="https://google.com"><img className="icon" src="dist/images/linkedin-sign-2.svg"></img></a>
                        </div>
                    </div>
                </div>
                <footer className="row">
                    <div className="col-12">
                        Designed & coded with passion by me.
                    </div>
                </footer>
            </section>
        )
    }
}


//-----------slider code---------->

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
        if (this.state.slideCount > 2) {
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

checked() {


}

    render() {

        return (
            <div className="slider">
                { this.state.slideCount === 1 ? <SlideOne /> : null }
                { this.state.slideCount === 2 ? <SlideTwo /> : null }
                { this.state.slideCount === 3 ? <SlideThree /> : null }

                <div className='arrows'>
                    <LeftArrow previousSlide={this.previousSlide} />

                    <RightArrow nextSlide={this.nextSlide} />
                </div>
            </div>
        )
    }
}

            //------------end slider------------>






class App extends React.Component {
    render() {
        return (
            <div>
                <ViewOne/>
                <ViewTwo/>
                <ViewThree/>
                <ViewFour/>
                <ViewFive/>
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


