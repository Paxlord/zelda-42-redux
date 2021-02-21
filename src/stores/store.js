import { createStore, combineReducers } from 'redux';
import playerReducer from '../reducers/CharacterReducer';
import GameReducer from '../reducers/GameReducer';
import MapReducer from '../reducers/MapReducer';

const rootReducers = combineReducers({
  player: playerReducer,
  game: GameReducer,
  map: MapReducer,
});

const store = createStore(
  rootReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;