import React from 'react';

class Menu extends React.Component {
    render () {
        return (
            <ul className="menu">
                <li><a href="#cont">Contact</a></li>
                <li><a href="#port">My work</a></li>
                <li><a href="#skillss">Skills</a></li>
                <li><a href="#abo">About</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        )
    }
}

export default Menu;