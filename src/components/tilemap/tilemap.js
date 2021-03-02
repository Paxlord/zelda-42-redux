import React, { Component } from 'react';
import { connect } from 'react-redux';
import basicTilemap from '../../assets/tilemaps/basic_tilemap.png';

class TileMap extends Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        { 
          this.props.maps[this.props.current_level_key].map((row, r_index) => {
            return (
              <div>
                { row.map((tile_key, c_index) => {
                  return <div 
                    style={{
                      position: "absolute",
                      top: r_index * 32,
                      left: c_index * 32,
                      background: `url('${basicTilemap}') ${this.props.sprite_atlas[tile_key].coord}`,
                      width: '32px',
                      height: '32px'
                    }}
                  />
                }) }
              </div>
            )
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    ...state.map,
  }
}

export default connect(mapStateToProps)(TileMap);