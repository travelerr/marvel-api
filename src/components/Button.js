import React from 'react';

class Button extends React.Component {

    render() {
        return(
            <button onClick={this.props.callApi}>
                Call Random Hero
            </button>
        )
    }
}

export default Button;