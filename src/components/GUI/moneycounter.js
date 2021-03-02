import React, {Component} from 'react';
import { connect } from 'react-redux';

class MoneyCounter extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        Money : {this.props.money}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(MoneyCounter);