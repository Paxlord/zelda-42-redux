import store from '../../stores/store';
import gameConstants from '../../stores/constants';

const handleMovement = () => {

  const dispatchMove = (dir) => {
    return store.dispatch({
      type: dir,
    });
  }

  const convertScreenToWorldCoords = (posX, posY) => {
    return {
      x: Math.floor( posX / gameConstants.TILE_SIZE ),
      y: Math.floor( posY / gameConstants.TILE_SIZE )
    }
  }

  const castDirection = (pos, sizeX, sizeY, dir, resolution, speed, mapArray, spriteAtlas) => {

    var castPosArray = [];

    switch(dir){
      case "RIGHT":
        for(let i = 0; i < resolution; i++){
          castPosArray.push(convertScreenToWorldCoords(pos.x + sizeX + speed, pos.y + (i * Math.floor(sizeY/resolution))));
        }
        break;

      case "LEFT":
        for(let i = 0; i < resolution; i++){
          castPosArray.push(convertScreenToWorldCoords(pos.x - speed, pos.y + (i * Math.floor(sizeY/resolution))));
        }
        break;
      case "UP":
        for(let i = 0; i < resolution; i++){
          castPosArray.push(convertScreenToWorldCoords(pos.x + (i * Math.floor(sizeX/resolution)), pos.y - speed));
        }
        break;
      case "DOWN":
        for(let i = 0; i < resolution; i++){
          castPosArray.push(convertScreenToWorldCoords(pos.x + (i * Math.floor(sizeX/resolution)) , pos.y + sizeY + speed));
        }
        
        break;
    }

    for(let j = 0; j < castPosArray.length; j ++){
      
      if(spriteAtlas[mapArray[castPosArray[j].y][castPosArray[j].x]].solid){
        return true;
      }
    }

    return false;
  }

  const canMoveToThisPlace = (dir) => {

      let oldPos = store.getState().player.position;
      let currentMap = store.getState().map.maps[store.getState().map.current_level_key];
      let currentAtlas = store.getState().map.sprite_atlas;

      let moveAmount = store.getState().player.walkSpeed;

      let sizeX = 32;
      let sizeY = 48;

      return !castDirection(oldPos, sizeX, sizeY, dir, 3, moveAmount, currentMap, currentAtlas);
  }

  const determineMoveDirection = (code) => {
    switch(code){
      case "ArrowRight":
        return canMoveToThisPlace("RIGHT") && dispatchMove("MOVE_PLAYER_RIGHT");

      case "ArrowLeft":
        return canMoveToThisPlace("LEFT") && dispatchMove("MOVE_PLAYER_LEFT");

      case "ArrowUp":
        return canMoveToThisPlace("UP") && dispatchMove("MOVE_PLAYER_UP");

      case "ArrowDown":
        return canMoveToThisPlace("DOWN") && dispatchMove("MOVE_PLAYER_DOWN");
    }
  }

  const stopMovement = (code) => {
    if(code === "ArrowRight" || code === "ArrowLeft"  || code === "ArrowUp"  || code === "ArrowDown" ){
      return store.dispatch({
        type: "STOP_MOVEMENT",
      })
    }

    return null;
  }

  window.addEventListener("keydown", (e) => {
    determineMoveDirection(e.code);
  });

  window.addEventListener("keyup", (e) => {
    stopMovement(e.code);
  });
}

export default handleMovement;