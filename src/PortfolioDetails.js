import React, { Component } from 'react';
import axios from 'axios';
import View from './PortfolioDetailsView';

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      latestBalance: 0,
      fetchBalanceSuccess: null,
    }
  }

  componentDidMount() {
    this.getCurrentBalance();
  }

  getCurrentBalance = () => {
    this.state.data.holdings.map((item,index) => {
      axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${item.id}&tsyms=USD`)
      .then(response => {
        let value = item.amount * response.data[`${item.id}`].USD;
        this.setState({
          latestBalance: this.state.latestBalance + value
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    })
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
      />
    );
  }

}


export default PortfolioDetails;
