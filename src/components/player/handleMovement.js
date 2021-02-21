import store from '../../stores/store';

const handleMovement = () => {

  const determineMoveDirection = (code) => {
    switch(code){
      case "ArrowRight":
        return store.dispatch({
          type: "MOVE_PLAYER_RIGHT",
        });

      case "ArrowLeft":
        return store.dispatch({
          type: "MOVE_PLAYER_LEFT",
        });

      case "ArrowUp":
        return store.dispatch({
          type: "MOVE_PLAYER_UP",
        });

      case "ArrowDown":
        return store.dispatch({
          type: "MOVE_PLAYER_DOWN",
        });
    }
  }

  window.addEventListener("keydown", (e) => {
    determineMoveDirection(e.code);
  });
}

export default handleMovement;