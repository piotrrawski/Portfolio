import React from 'react';

import Header from '../../Header/';
import Quote from '../../Quote/';
import Cookies from '../../Cookies/';
import ResponsiveMenu from '../../ResponsiveMenu/';

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

export default ViewOne;