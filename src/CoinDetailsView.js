import React from 'react';

const CoinDetailsView = ({ data }) => {
  if(data.marketData == null) {
    return (
      <div>...</div>
    )
  }
  return (
    <div className="flex justify-between bb b--black-05 pv2">
      <div className="lh-copy">
        <span className="b ttu">{data.marketData[0].symbol}</span><span>({data.holdingAmount})</span>
        <span className="db black-50">${(data.marketData[0].price_usd * data.holdingAmount).toFixed(2)}</span>
      </div>
      <div className="flex items-center">
        {data.marketData[0].percent_change_24h > 0 ?
          (<span className="green">+{data.marketData[0].percent_change_24h}%</span>) :
          (<span className="red">{data.marketData[0].percent_change_24h}%</span>)
        }
      </div>
    </div>
  );
};

export default CoinDetailsView;
