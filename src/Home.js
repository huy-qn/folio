import React from 'react';

import CoinDetails from './CoinDetails';
import PortfolioDetails from './PortfolioDetails';

const Home = ( {data} ) => {
  return (
    <div>
      <PortfolioDetails data={data}/>
      <div className="list pl0 ph3 mt3">
        <h2 className="ttu f7 gray">holding</h2>
        {data.holdings.map((item,index) => {
          return(
            <CoinDetails
              key={index}
              coinName={item.id}
              holdingAmount={item.amount}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Home;
