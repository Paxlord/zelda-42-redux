import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/CharacterReducer';
import GameReducer from '../reducers/GameReducer';
import MapReducer from '../reducers/MapReducer';
import RubyReducer from '../reducers/RubyReducer';
import DecorationReducer from '../reducers/DecorationReducer';

const rootReducers = combineReducers({
  player: playerReducer,
  game: GameReducer,
  map: MapReducer,
  rubies: RubyReducer,
  decorations: DecorationReducer,
});

const store = createStore(
  rootReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;