const initialState = {
  maps: {
    level_1: 
      [[1,1,1,1,1,1,1,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,0,0,0,0,0,0,1],
       [1,1,1,1,1,1,1,1],]
  },
  sprite_atlas: [
    {
      key: 'grass',
      coord: "0px 0px"
    },
    {
      key: 'wall',
      coord: "32px 0px"
    },
    {
      key: 'rock',
      coord: "64px 0px"
    }
  ]
}

const MapReducer = (state = initialState, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default MapReducer;