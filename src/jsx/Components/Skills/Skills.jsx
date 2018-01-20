import React from 'react';

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

export default Skills;