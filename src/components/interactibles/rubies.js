import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../stores/store';
import rubies from '../../assets/tilemaps/rubies.png';

class Rubies extends Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){
  }

  render(){
    return(
      <div>
        { 
          this.props.current_rubies.map((ruby) => {
            return (
              <div 
                style={{
                  position: "absolute",
                  top: ruby.pos.y,
                  left: ruby.pos.x,
                  background: `url('${rubies}') ${this.props.sprite_atlas[ruby.item_index].coord}`,
                  width: '32px',
                  height: '32px'
                }}
              />
            )
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    ...state.rubies,
  }
}

export default connect(mapStateToProps)(Rubies);