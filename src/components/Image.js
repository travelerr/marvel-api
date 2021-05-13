import React from 'react';

class Image extends React.Component {

    render() {
        return(
            <div>
                <img src={this.props.heroImage} />
            </div>
        )
    }
}

export default Image;