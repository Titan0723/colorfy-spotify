import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      

    }
    this.playlist = this.playlist.bind(this),
    this.songs = this.songs.bind(this)
  }
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}