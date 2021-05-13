import React from 'react';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    this.fetchHero();
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  fetchHero = () => {
    var randNum = this.getRandomArbitrary(0, 1493);
    console.log(randNum);
    axios.get('https://gateway.marvel.com/v1/public/characters/ts=marvel&apikey=48c725a2849811b80542c607ce271b6c&hash=1c528f6624e557d5f535c1b6b0794393')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <h1> Working </h1>
    );
  }
}

export default App;
