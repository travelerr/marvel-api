import React from 'react';

class Title extends React.Component {

    render() {
        return(
            <div>
                <h1>Title</h1>
                <h1>{this.props.heroName}</h1>
            </div>
        )
    }
}

export default Title;