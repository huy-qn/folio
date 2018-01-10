import React, { Component } from 'react';
import axios from 'axios';
import View from './CoinDetailsView';
class CoinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.props.coinName}&tsyms=USD,BTC,EUR`)
    .then(response => {
      console.log(response.data)
      this.setState({
        data: {
          marketData: {
            USD: response.data.RAW[`${this.props.coinName}`].USD,
            EUR: response.data.RAW[`${this.props.coinName}`].EUR,
            BTC: response.data.RAW[`${this.props.coinName}`].BTC
          },
          coinName: this.props.coinName,
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
