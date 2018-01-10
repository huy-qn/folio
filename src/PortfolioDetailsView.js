import React from 'react';
import { LineChart } from 'react-chartkick';

window.Highcharts = require('highcharts');

const formatMoney = (input) => {
  let output = input.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return output;
}

const getBalanceDifferent = (latest, secondLatest) => {
  let output = latest - secondLatest;
  return output;
}

const PortfolioDetailsView = ( {data, latestBalance} ) => {
  return (
    <div>
      <div className="tc">
        <h1 className="ttu f7 gray">portfolio balance</h1>
        <div className="mb2"><span className="f5 black">$</span><span className="f2 black">{formatMoney(latestBalance)}</span></div>
        <div>
          {
            getBalanceDifferent(data.balance[data.balance.length - 1][1], data.balance[data.balance.length - 2][1]) > 0 ?
            <span className="f5 green mr1">+{formatMoney(getBalanceDifferent(data.balance[data.balance.length - 1][1], data.balance[data.balance.length - 2][1]))}</span> :
            <span className="f5 red mr1">{formatMoney(getBalanceDifferent(data.balance[data.balance.length - 1][1], data.balance[data.balance.length - 2][1]))}</span>
          }
          <span className="f5 green">({(getBalanceDifferent(data.balance[data.balance.length - 1][1], data.balance[data.balance.length - 2][1]) / data.balance[data.balance.length - 2][1] * 100).toFixed(0)}%)</span></div>
      </div>
      <div>
        <LineChart
          data={data.balance}
          height="100px"
          library={
            {
              chart: {
                height: '100px',
              },
              colors: ['#27A875', '#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
              legend: {
                enabled: false
              },
              plotOptions: {
                area: {
                  linecap: "square"
                },
                series: {
                  marker: {
                    enabled: false
                  }
                }
              },
              xAxis: {
                visible: false
              },
              yAxis: {
                visible: true,
                gridLineColor: "#fff",
                labels: {
                  enabled: false,
                },
                plotLines: [{
                    value: 0,
                    color: 'gray',
                    dashStyle: 'dash',
                    width: 1,
                }]
              }
            }
          } />
      </div>
    </div>
  );
};

export default PortfolioDetailsView;
