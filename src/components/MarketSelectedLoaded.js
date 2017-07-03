import React from 'react';
import styled from 'styled-components';
import Bets from './Bets';
import Teams from './Teams';

const MarketSelectedLoaded = ({ selectedMarketData, ...props }) =>
  <MarketsMatch>
    <Teams
      home={props.market.marketData.banner.home}
      away={props.market.marketData.banner.away}
    />

    {selectedMarketData.type === 'non-match'
      ? <SubTitle>
          {selectedMarketData.name}
        </SubTitle>
      : null}

    <Bets bets={selectedMarketData.bets} />
  </MarketsMatch>;

export default MarketSelectedLoaded;

const MarketsMatch = styled.div`
  flex-grow: 1;
  align-self: flex-start;
`;

const SubTitle = styled.div`
  background: ${props => props.theme.tcolor5};
  border-top: 2px solid ${props => props.theme.tcolor3};
  padding: 15px;

  font-size: 13px;
  font-style: italic;
  text-align: left;
`;
