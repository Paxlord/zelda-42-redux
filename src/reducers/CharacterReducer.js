const initialState = {
  position: {
    x: 32,
    y: 32
  },
  moving: false,
  facing: 0,
  walkSpeed: 4,
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
        moving: false
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
        moving: true,
        facing: 96
      }
    case "LEFT":
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x - state.walkSpeed
        },
        moving: true,
        facing: 144
      }
    case "UP":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y - state.walkSpeed
        },
        moving: true,
        facing: 48
      }
    case "DOWN":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y + state.walkSpeed
        },
        moving: true,
        facing: 0
      }
  }

}
export default playerReducer;