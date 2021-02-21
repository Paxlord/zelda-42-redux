import React, {Component} from 'react';
import { connect } from 'react-redux';
import characterSprite from '../../assets/spritesheets/characters.png';

import handleMovement from './handleMovement';

class Player extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    handleMovement();
  }

  render(){
    return(
      <div tabIndex="0" onKeyDown={() => console.log("keydown")}>
        <div
          style={{ 
            position: "absolute",
            top: this.props.position.y,
            left: this.props.position.x,
            background: `url('${characterSprite}') 0 0`,
            width: '32px',
            height: '32px'
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.player,

  }
}


export default connect(mapStateToProps)(Player)