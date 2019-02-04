import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from './components/Particles/Particles';
import './App.css';

const app = new Clarifai.App(
  {
    apikey: '9d10278f8fe04097a47cbd3c9c9faefd'
  }
);


class App extends Component {
  constructor(){
    super ();
    this.state={
      input:'',
    }
  }
  onInputChange=(event)=>{
    console.log(event.target.value);
  }
  onButtonSubmit=()=>{
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles 
                params={{
                    particles: {
                        shape: {
                            type: 'images',
                            images: [
                                {src: 'path/to/first/image.svg', height: 20, width: 20},
                                {src: 'path/to/second/image.jpg', height: 20, width: 20},
                            ]
                        }
                    }
                }} />


        <Navigation/>
        
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
        {/*</FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;
