const initialState = {
  position: {
    x: 32,
    y: 32
  },
  moving: {
    left: false,
    right: false,
    up: false,
    down: false
  },
  facing: {
    left: false,
    right: false,
    up: false,
    down: false
  },
  walkSpeed: 2,
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
        }
      }
    case "LEFT":
      return {
        ...state,
        position: {
          ...state.position,
          x: state.position.x - state.walkSpeed
        }
      }
    case "UP":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y - state.walkSpeed
        }
      }
    case "DOWN":
      return {
        ...state,
        position: {
          ...state.position,
          y: state.position.y + state.walkSpeed
        }
      }
  }

}
export default playerReducer;