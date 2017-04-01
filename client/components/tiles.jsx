import React, { Component } from 'react';

class Tiles extends Component {
  constructor(props) {
    super(props)
    this.getXPos = this.getXPos.bind(this)
    this.getYPos = this.getYPos.bind(this)
  }


getXPos(tempo){
  let grid = 1400 / 10; 
  let xPos = grid  * tempo;
  return xPos;
}

getYPos(energy){
  let grid = 700 / 250;
  let yPos = grid * energy;
  return yPos;
}

renderTiles(){
  for(let i = 0; i < this.props.playlist.length; i++){
    tile.push(this.props.playlist[i]);
  }
}





  render() {
  let tile = [];
  for(let i = 0; i < this.props.playlist.length; i++){
    let y = -1 *(this.getYPos(this.props.playlist[i][0]))
    let x = -1 * (this.getXPos(this.props.playlist[i][1]))
    console.log(y,x)
    tile.push(<div className="tiles" key = {i} style={{backgroundColor:'blue', width:'50px', height: '50px', borderRadius: '50%', position: 'relative', positionTop:{y}, positionLeft:{x}}}></div>)
  }
    return (
      <div>
        {tile}
      </div>
    )
  }
}
export default Tiles