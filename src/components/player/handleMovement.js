import store from '../../stores/store';

const handleMovement = () => {

  const dispatchMove = (dir) => {
    return store.dispatch({
      type: dir,
    });
  }

  const canMoveToThisPlace = (dir, pos, map) => {

  }

  const determineMoveDirection = (code) => {
    switch(code){
      case "ArrowRight":
        return dispatchMove("MOVE_PLAYER_RIGHT");

      case "ArrowLeft":
        return dispatchMove("MOVE_PLAYER_LEFT");

      case "ArrowUp":
        return dispatchMove("MOVE_PLAYER_UP");

      case "ArrowDown":
        return dispatchMove("MOVE_PLAYER_DOWN");
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