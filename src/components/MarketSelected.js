import React from 'react';
import MarketSelectedLoaded from './MarketSelectedLoaded';

const MarketSelected = ({ ...props }) =>
  props.selectedMarketData
    ? <MarketSelectedLoaded {...props} />
    : <div>Loading... </div>;

export default MarketSelected;
