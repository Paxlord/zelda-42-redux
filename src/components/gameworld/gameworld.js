import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../stores/store';

import Player from '../player/Player';
import Map from '../tilemap/tilemap';
import DecorationsMap from '../decorationmap';
import Rubies from '../interactibles/rubies'; 

class GameWorld extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    store.dispatch({
      type: 'GENERATE_RUBY',
      payload: {
        type: "gold",
        pos: {
          x: 5,
          y: 5
        }
      }
    })
  }

  render(){
    return(
      <div>
        <Map level_key={this.props.current_level_key}/>
        <DecorationsMap level_key={this.props.current_level_key} />
        <Rubies />
        <Player/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.map,
  }
}


export default connect(mapStateToProps)(GameWorld);