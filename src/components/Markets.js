import React from 'react';
import styled from 'styled-components';
import MarketsNav from './MarketsNav';
import { Switch, Route } from 'react-router-dom';
import MarketSelectedContainer from '../containers/MarketSelectedContainer';

const Markets = ({ ...props }) =>
  <MainContentWrapper>
    <MarketsNav {...props} />
    <Switch>
      {props.market.marketsLoaded.map((market, index) =>
        <Route
          key={index}
          path="/:pageid?"
          component={MarketSelectedContainer}
        />
      )}
    </Switch>
  </MainContentWrapper>;

export default Markets;

const MainContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 500px;
  margin: 0 40px;
`;
