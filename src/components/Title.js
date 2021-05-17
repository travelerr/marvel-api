import React from 'react';

class Title extends React.Component {

    render() {
        return(
            <div>
                <h1>Title</h1>
                <h2>{this.props.heroName}</h2>
            </div>
        )
    }
}

export default Title;