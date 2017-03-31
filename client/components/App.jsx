import React, {Component} from 'react';
import Container from './Container.jsx';
import Canvas from './canvas.jsx';
import Tiles from './tiles.jsx';
class App extends Component {
  constructor(){
    super();
    this.state ={
      // need to grab the playlist from JSON
      //need to grab the songs from JSON

    }
    // this.playlist = this.playlist.bind(this),
    // this.songs = this.songs.bind(this)
  }

  // playlist
  //songs
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <Container />
        <Canvas />
        <Tiles />
      </div>);
  }
}

export default App;