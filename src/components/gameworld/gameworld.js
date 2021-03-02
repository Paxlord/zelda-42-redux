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
        <Map level_key={this.props.current_level_key}/>
        <Player/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.map,
    ...state.rubies
  }
}


export default connect(mapStateToProps)(GameWorld);