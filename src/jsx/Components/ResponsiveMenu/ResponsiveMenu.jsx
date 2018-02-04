import React from 'react';

class ResponsiveMenu extends React.Component {
    render () {
        return (
            <div>
                <ul className="responsivemenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#abo">About</a></li>
                    <li><a href="#skillss">Skills</a></li>
                    <li><a href="#port">My&nbsp;work</a></li>
                    <li><a href="#cont">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default ResponsiveMenu;