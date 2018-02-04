import React from 'react';

class ResponsiveMenu extends React.Component {
    render () {
        return (
                <ul className="responsivemenu">
                    <a href="#"><li>Home</li></a>
                    <a href="#abo"><li>About</li></a>
                    <a href="#skillss"><li>Skills</li></a>
                    <a href="#port"><li>My&nbsp;work</li></a>
                    <a href="#cont"><li>Contact</li></a>
                </ul>
        )
    }
}

export default ResponsiveMenu;