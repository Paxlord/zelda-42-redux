const initialState = {
  current_rubies: [
    
  ],
  sprite_atlas: [
    {
      key: 'green',
      coord: "0px 0px",
      amount: 20
    },
    {
      key: 'red',
      coord: "32px 0px",
      solid: 60
    },
    {
      key: 'gold',
      coord: "64px 0px",
      solid: 120
    }
  ],
}

const RubyReducer = (state = initialState, action) => {
  switch(action.type){
    case "GENERATE_RUBY":
      return add_ruby(state, action);
    case "REMOVE_RUBY":
      return remove_ruby(state, action);
    default:
      return state;
  }
}

const add_ruby = (state, action) => {
  const { type, pos } = action.payload;
  let oldRubyArray = state.current_rubies;
  let rubySpriteIndex = null;

  switch(type){
    case 'green':
      rubySpriteIndex = 0;
      break; 
    case 'red':
      rubySpriteIndex = 1;
      break;
    case 'gold':
      rubySpriteIndex = 2;
      break;
  }

  oldRubyArray.push({ id: oldRubyArray.length - 1, pos, item_index: rubySpriteIndex  });

  return {
    ...state,
    current_rubies: oldRubyArray
  };
}

const remove_ruby = (state, action) => {
  return {
    ...state
  }
}

export default RubyReducer;