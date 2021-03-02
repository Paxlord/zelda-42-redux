import React, {Component} from 'react';
import { connect } from 'react-redux';

import Player from '../player/Player';
import Map from '../tilemap/tilemap';

class GameWorld extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Map/>
        <Player />
      </div>
    )
  }
}


export default GameWorld;