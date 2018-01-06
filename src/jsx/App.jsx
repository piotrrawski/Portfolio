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
            </div>
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
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">My work</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        )
    }

}

class App extends React.Component {
    render () {
        return (
          <ViewOne/>
        )
}
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});