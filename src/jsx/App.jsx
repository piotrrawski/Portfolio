console.log("hello, i'm working");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

import ViewOne from './Components/Views/ViewOne';
import ViewTwo from './Components/Views/ViewTwo';
import ViewThree from './Components/Views/ViewThree';
import ViewFour from './Components/Views/ViewFour';
import ViewFive from './Components/Views/ViewFive';
import ResponsiveMenu from './Components/ResponsiveMenu'

class App extends React.Component {
    render() {
        return (
            <div>
                <ViewOne/>
                <ViewTwo/>
                <ViewThree/>
                <ViewFour/>
                <ViewFive/>
                <ResponsiveMenu/>
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


