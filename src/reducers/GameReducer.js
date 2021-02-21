const initialState = {
  TILE_SIZE: 16,
  SCREEN_SIZE: {
    x: 640,
    y: 480
  }
}

const GameReducer = (state = initialState, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default GameReducer;