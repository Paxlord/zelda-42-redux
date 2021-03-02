const initialState = {
  position: {
    x: 32,
    y: 32
  },
  size: {
    x: 32,
    y: 48
  },
  facing: 0,
  walkSpeed: 3,

  state_machine : {
    ATTACKING: "ATTACKING",
    MOVING: "MOVING",
    IDLE: "IDLE"
  },

  current_state: "IDLE",
  money: 0,
  inventory: []

}

const playerReducer = (state = initialState, action) => {
  switch(action.type){
    case "MOVE_PLAYER_RIGHT":
      return movePlayer(state, "RIGHT");

    case "MOVE_PLAYER_LEFT":
      return movePlayer(state, "LEFT");

    case "MOVE_PLAYER_DOWN":
      return movePlayer(state, "DOWN");

    case "MOVE_PLAYER_UP":
      return movePlayer(state, "UP");

    case "STOP_MOVEMENT":
      return {
        ...state,
        current_state: state.state_machine.IDLE,
      }

    case "ADD_MONEY":
      return {
        ...state,
        money: state.money + action.payload.amount
      }

    default:
      return state;
  }
}

const movePlayer = (state, dir) => {

  switch(dir){
    case "RIGHT":
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x + state.walkSpeed
        },
        current_state: state.state_machine.MOVING,
        facing: 96
      }
    case "LEFT":
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x - state.walkSpeed
        },
        current_state: state.state_machine.MOVING,
        facing: 144
      }
    case "UP":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y - state.walkSpeed
        },
        current_state: state.state_machine.MOVING,
        facing: 48
      }
    case "DOWN":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y + state.walkSpeed
        },
        current_state: state.state_machine.MOVING,
        facing: 0
      }
  }

}
export default playerReducer;