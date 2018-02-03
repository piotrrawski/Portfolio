import React from 'react';
import Menu from '../Menu/';

class Header extends React.Component {

handleClick = () => {
console.log('click');
}

    render() {
        return (

            <header>
                <section className="row">
                    <div className="col-6 logo">Piotr Rawski</div>
                    <div className="col-6 menu"><Menu /></div>
                    <div className="col-12 hamburger">Piotr Rawski<i className="fa fa-bars" onClick={this.handleClick} ></i>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;