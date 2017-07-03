import React from 'react';
import styled from 'styled-components';
import MarketsNavLinks from './MarketsNavLinks';

const MarketsNav = ({ ...props }) =>
  <MarketsNavWrapper>
    {props.market.marketData
      ? <MarketsNavLinks {...props.market} />
      : <div>Loading... </div>}
  </MarketsNavWrapper>;

export default MarketsNav;

const MarketsNavWrapper = styled.div`
  align-self: flex-start;
  margin: 0 10px 0 0;
`;
