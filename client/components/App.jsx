import React, {Component} from 'react';
// import container from './container'

class App extends Component {
  constructor(){
    super();
    this.state ={
      // need to grab the playlist from JSON
      //need to grab the songs from JSON

    }
    this.playlist = this.playlist.bind(this),
    this.songs = this.songs.bind(this)
  }

  // playlist
  //songs
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <container />
      </div>);
  }
}

export default App;