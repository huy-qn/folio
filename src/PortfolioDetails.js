import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import View from './PortfolioDetailsView';

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      chartData: this.props.data.balance,
      latestBalance: 0,
      fetchBalanceSuccess: null,
    }
  }

  componentDidMount() {
    this.getCurrentBalance();
  }

  getCurrentBalance = () => {
    this.state.data.holdings.map((item,index) => {
      axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${item.id}&tsyms=USD,BTC,EUR`)
      .then(response => {
        let value = item.amount * _.toNumber(response.data.RAW[`${item.id}`].USD.PRICE);
        this.setState({
          latestBalance: this.state.latestBalance + value,
          data: {
            marketData: {
              USD: response.data.RAW[`${item.id}`].USD,
              EUR: response.data.RAW[`${item.id}`].EUR,
              BTC: response.data.RAW[`${item.id}`].BTC
            },
            balance: this.props.data.balance.push(["2018-01-07 00:00:00 UTC", 120 * 70])
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    })

    return true;
  }

  render() {
    if(this.state.latestBalance === 0) {
      return (
        <div>...</div>
      );
    }

    return (
      <View
        data={this.state.data}
        latestBalance={this.state.latestBalance}
        chartData={this.state.chartData}
      />
    );
  }

}


export default PortfolioDetails;
