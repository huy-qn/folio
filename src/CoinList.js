import React, { Component } from 'react';
import View from './CoinListView';

class CoinList extends Component {
  render() {
    console.log(this.props.data)
    return (
      <View data={this.props.data}/>
    );
  }
}

export default CoinList;
