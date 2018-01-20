import React from 'react';

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
                            <a href="https://google.com"><img className="icon" src="dist/images/github-logo-2.svg"></img></a>
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

export default Contact;