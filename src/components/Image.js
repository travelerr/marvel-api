import React from 'react';

class Image extends React.Component {

    render() {
        return(
            <div>
                <h1>Image</h1>
                <img 
                alt="hero"
                style={{maxWidth: "300px", maxHeight:"300px"}}
                src={this.props.heroImage} />
            </div>
        )
    }
}

export default Image;