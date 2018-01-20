import React from 'react';
import Menu from '../Menu/';

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

export default Header;