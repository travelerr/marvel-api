import React from 'react';
import Button  from '/Users/justinsacco/assesment/marvel/src/components/Button.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Button onClick={this.fetchHero} />
      </div>
    );
  }
}

export default App;
