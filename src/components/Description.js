import React from 'react';

class Description extends React.Component {

    render() {
        return(
            <div>
                <h1> Description </h1>
                <p>{this.props.heroDescription}</p>
            </div>
        )
    }
}

export default Description;