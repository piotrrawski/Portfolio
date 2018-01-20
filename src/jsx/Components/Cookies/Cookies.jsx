import React from 'react';

class Cookies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenClass: ""
        }
    }
    handleClick = () => {
        console.log('click')
        console.log(this.state.hiddenClass)
        this.setState({
            hiddenClass: "none",
        })
    }

    render (){
        return (
            <div id="cookies" style={{display:this.state.hiddenClass}}>
                <div className="cookies-txt">By continuing to browse our site you agree to our use of cookies</div>
                <div className="cookies-exit" onClick={this.handleClick}>OK</div>
            </div>
        )
    }
}

export default Cookies;