import store from '../../stores/store';
import gameConstants from '../../stores/constants';
import { convertScreenToWorldCoords } from '../../utils/coordutils';

export const isCollidingWithRubies = () => {
  let rubiesArray = store.getState().rubies.current_rubies;
  let playerPos = store.getState().player.position;
  let playerSize = store.getState().player.size;


  let centerPoint = {
    x: playerPos.x + Math.floor(playerSize.x/2),
    y: playerPos.y + Math.floor(playerSize.y/2),
  }
  let playerWorldPos = convertScreenToWorldCoords(centerPoint.x, centerPoint.y);

  rubiesArray.forEach((ruby) => {
    let rubyWorldPos = convertScreenToWorldCoords(ruby.pos.x, ruby.pos.y);

    if(playerWorldPos.x === rubyWorldPos.x && playerWorldPos.y === rubyWorldPos.y){
      store.dispatch({
        type: "REMOVE_RUBY",
        payload: {
          id: ruby.id,
        }
      });

      store.dispatch({
        type: "ADD_MONEY",
        payload: {
          amount: store.getState().rubies.sprite_atlas[ruby.item_index].amount,
        }
      })
    }
  });

}