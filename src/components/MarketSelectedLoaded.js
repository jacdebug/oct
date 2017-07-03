import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import background from '../assets/background.png';

const MarketSelectedLoaded = ({ selectedMarketData, ...props }) =>
  <MarketsMatch>
    <Teams>
      <Team data={props.market.marketData.banner.home} />
      <TeamVs>Vs</TeamVs>
      <Team data={props.market.marketData.banner.away} />
    </Teams>
    {selectedMarketData.type === 'non-match'
      ? <SubTitle>
          {selectedMarketData.name}
        </SubTitle>
      : null}
    <Box>
      {selectedMarketData.bets.map((bet, index) =>
        <Bets key={index}>
          <div>
            {bet.name}
          </div>
          <div className="odds">
            {bet.bestOddsDecimal}
          </div>
        </Bets>
      )}
    </Box>
  </MarketsMatch>;

export default MarketSelectedLoaded;

const MarketsMatch = styled.div`
  flex-grow: 1;
  align-self: flex-start;
`;

const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  min-height: 150px;
  background-image: url(${background});
`;

const Team = ({ data }) =>
  <div>
    <TeamImg src={`/assets/${data.logo}`} />
    <div>
      {data.name}
    </div>
  </div>;

const TeamImg = styled.img`max-width: 100px;`;
const TeamVs = styled.div`margin: 30px;`;

const SubTitle = styled.div`
  background: ${props => props.theme.tcolor5};
  border-top: 2px solid ${props => props.theme.tcolor3};
  padding: 15px;

  font-size: 13px;
  font-style: italic;
  text-align: left;
`;

const Bets = styled.div`
  flex-grow: 1;
  border: 10px solid ${props => props.theme.tcolor1};
  border-width: 10px 0 10px 10px;
  text-align: center;

  div {
    margin: 5px;
  }

  .odds {
    color: ${props => props.theme.tcolor3};
  }

  &:last-child {
    border-width: 10px;
  }
`;
