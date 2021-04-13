import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../stores/store';

import characterSprite from '../../assets/spritesheets/hercules.png';
import sword_slash from '../../assets/spritesheets/sword_slash.png';

import {determineMoveDirection, stopMovement} from './handleMovement';
import { isCollidingWithRubies } from './interactibleInteractions';

let step = 0;
let animationSpeed = 8;
let animationCounter = 0;
let keyPressed = null;
let lastKeyPressed = null;
let attackTime = 12;

class Player extends Component{

  constructor(props){
    super(props);
  }

  MovingState(){
    if(animationCounter%animationSpeed === 0){
      step += 32;
      if(step > 32 * 4){
        step = 0;
      }
      animationCounter = 0;
    }
    if(keyPressed){
      if(keyPressed === "ArrowRight" || keyPressed === "ArrowLeft"  || keyPressed === "ArrowUp"  || keyPressed === "ArrowDown")
        determineMoveDirection(keyPressed);

      if(keyPressed === "Space"){
        store.dispatch({
          type: "ATTACK"
        });
        attackTime = 12;
      }
    }else{
      stopMovement(lastKeyPressed);
    }
  }

  IdleState(){
    step=0;
    if(keyPressed){
      if(keyPressed === "ArrowRight" || keyPressed === "ArrowLeft"  || keyPressed === "ArrowUp"  || keyPressed === "ArrowDown")
        determineMoveDirection(keyPressed);
      
      if(keyPressed === "Space"){
        store.dispatch({
          type: "ATTACK"
        });
        attackTime = 12;
      }
    }else{
      stopMovement(lastKeyPressed);
    }
  }

  AttackingState(){
    attackTime--;
    if(attackTime <= 0){
      store.dispatch({
        type: "STOP_ACTION"
      });
    }
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

      isCollidingWithRubies();
      animationCounter++;

      switch(this.props.current_state){

        case this.props.state_machine.MOVING:
          this.MovingState();
          break;

        case this.props.state_machine.IDLE:
          this.IdleState();
          break;

        case this.props.state_machine.ATTACKING:
         this.AttackingState();
          break;
    }
  }, 16);
  }

  GetAttackPos(){
    switch(this.props.facing){
      case 0:
        return {
          x: this.props.position.x,
          y: this.props.position.y + this.props.size.y
        };
      case 48:
        return {
          x: this.props.position.x,
          y: this.props.position.y - 32
        };
      case 96:
        return {
          x: this.props.position.x + this.props.size.x,
          y: this.props.position.y
        };
      case 144:
        return {
          x: this.props.position.x - 32,
          y: this.props.position.y
        };
    }
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
        {(this.props.current_state === this.props.state_machine.ATTACKING) && 
          <div
            style={{ 
              position: "absolute",
              top: this.GetAttackPos().y,
              left: this.GetAttackPos().x,
              background: `url('${sword_slash}') 0px 0px`,
              width: '32px',
              height: '32px'
            }}
          />
        }
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