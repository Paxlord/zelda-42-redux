import gameConstants from '../stores/constants';

export const convertScreenToWorldCoords = (posX, posY) => {
  return {
    x: Math.floor( posX / gameConstants.TILE_SIZE ),
    y: Math.floor( posY / gameConstants.TILE_SIZE )
  }
}

export const convertWorldToScreenCoords = (posX, posY) => {
  return {
    x: posX * gameConstants.TILE_SIZE,
    y: posY * gameConstants.TILE_SIZE
  }
}