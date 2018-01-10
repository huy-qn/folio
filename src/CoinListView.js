import React from 'react';
import CoinDetails from './CoinDetails';

const CoinListView = (props) => {
  return (
    <div>
      {props.data.map((item,index) => {
        return(
          <CoinDetails
            key={index}
            coinName={item.id}
            holdingAmount={item.amount}
          />
        )
      })}
    </div>
  );
};

export default CoinListView;
