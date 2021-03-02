const initialState = {
  maps: {
    level_1: 
      [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
       [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
       [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],]
  },
  sprite_atlas: [
    {
      key: 'grass',
      coord: "0px 0px",
      solid: false
    },
    {
      key: 'wall',
      coord: "32px 0px",
      solid: true
    },
    {
      key: 'rock',
      coord: "64px 0px",
      solid: true
    }
  ],
  current_level_key: "level_1"
}

const MapReducer = (state = initialState, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default MapReducer;