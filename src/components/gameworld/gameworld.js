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
        <Map level_key="level_1" />
        <Player />
      </div>
    )
  }
}


export default GameWorld;