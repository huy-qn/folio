import React from 'react';

const CoinDetailsView = ({ data }) => {
  if(data.marketData == null) {
    return (
      <div>...</div>
    )
  }
  console.log(data);
  return (
    <div className="flex justify-between bb b--black-05 pv2">
      <div className="lh-copy">
        <span className="b ttu">{data.coinName}</span><span> ({data.holdingAmount})</span>
        <span className="db black-50">${(data.marketData.USD.PRICE * data.holdingAmount).toFixed(2)}</span>
      </div>
      <div className="flex items-center">
        {data.marketData.USD.CHANGEPCTDAY > 0 ?
          (<span className="green">+{data.marketData.USD.CHANGEPCTDAY.toFixed(2)}%</span>) :
          (<span className="red">{data.marketData.USD.CHANGEPCTDAY.toFixed(2)}%</span>)
        }
      </div>
    </div>
  );
};

export default CoinDetailsView;
