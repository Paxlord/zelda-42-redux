import React, {Component} from 'react';
import { connect } from 'react-redux';
import characterSprite from '../../assets/spritesheets/hercules.png';

import {determineMoveDirection, stopMovement} from './handleMovement';

let step = 0;
let animationSpeed = 8;
let animationCounter = 0;
let keyPressed = null;
let lastKeyPressed = null;

class Player extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      keyPressed = e.code;
    });
  
    window.addEventListener("keyup", (e) => {
      e.preventDefault();
      lastKeyPressed = e.code;
      keyPressed = null;
    });

    setInterval(() => { 

      if(keyPressed){
        determineMoveDirection(keyPressed);
      }else{
        stopMovement(lastKeyPressed);
      }

      animationCounter++;

      switch(this.props.current_state){
        case this.props.state_machine.MOVING:

          if(animationCounter%animationSpeed === 0){
            step += 32;
            if(step > 32 * 4){
              step = 0;
            }
            animationCounter = 0;
          }

          break;

        case this.props.state_machine.IDLE:
          step=0;
          break;

        case this.props.state_machine.ATTACKING:
          break;
    }
  }, 16);
  }

  render(){


    
    

    return(
      <div tabIndex="0" onKeyDown={() => console.log("keydown")}>
        <div
          style={{ 
            position: "absolute",
            top: this.props.position.y,
            left: this.props.position.x,
            background: `url('${characterSprite}') ${step}px ${this.props.facing}px`,
            width: '32px',
            height: '48px'
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