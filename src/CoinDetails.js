import React, { Component } from 'react';
import axios from 'axios';
import View from './CoinDetailsView';
class CoinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        marketData: null,
        holdingAmount: ''
      }
    }
  }
  componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.props.coinName}/?convert=USD`)
    .then(response => {
      this.setState({
        data: {
          marketData: response.data,
          holdingAmount: this.props.holdingAmount
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <View data={this.state.data}/>
    );
  }
}

export default CoinDetails;
