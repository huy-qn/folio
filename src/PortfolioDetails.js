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
      axios.get(`https://api.coinmarketcap.com/v1/ticker/${item.id}/?convert=USD`)
      .then(response => {
        let value = item.amount * response.data[0].price_usd;
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
        onChange={this.handleChange}
      />
    );
  }

  handleChange = () => {
    console.log("changed")
  }
}


export default PortfolioDetails;
