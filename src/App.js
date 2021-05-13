import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Button  from './components/Button';
import Title  from './components/Title';
import Description  from './components/Description';
import Image  from './components/Image';
import Favorites  from './components/Favorites';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    
  }
})

class App extends React.Component {

  state = { 
    heroName: '',
    heroDescription: '',
    heroImage: '', 
   };


  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  fetchHero = () => {
    var randNum = this.getRandomArbitrary(0, 1493);
    console.log(randNum);
    axios.get('https://gateway.marvel.com/v1/public/characters?limit=1&offset='+ randNum + '&ts=marvel&apikey=9a5c1142db168815eca77736bb917fc0&hash=b99df1e447c6f39abc3f937c66f1ebd6')
      .then((response) => {
        const heroName  = response.data.data.results[0].name;
        const heroDescription  = response.data.data.results[0].description;
        const heroImage  = response.data.data.results[0].thumbnail.path + '.jpg';

        this.setState({ heroName: heroName});
        this.setState({ heroDescription: heroDescription });
        this.setState({ heroImage: heroImage});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}> Super Hero Generator </h1>
        <div style={{display: "flex"}}>
          <div style={{width: "25%", margin: "20px"}}>
            <Title heroName={this.state.heroName} />
          </div>
          <div style={{width: "25%", margin: "20px"}}>
            <Description heroDescription={this.state.heroDescription} />
          </div>
          <div style={{width: "25%", margin: "20px"}}>
            <Image heroImage={this.state.heroImage} />
          </div>
          <div style={{width: "25%", margin: "20px"}}>
            <Favorites heroImage={this.state.heroImage} />
          </div>
        </div>
        <Button callApi={this.fetchHero} />
      </div>
    );
  }
}

export default App;
