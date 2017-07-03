import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const Bets = ({ bets }) =>
  <Box>
    {bets.map((bet, index) =>
      <BetsWrapper key={index}>
        <div>
          {bet.name}
        </div>
        <div className="odds">
          {bet.bestOddsDecimal}
        </div>
      </BetsWrapper>
    )}
  </Box>;

export default Bets;

const BetsWrapper = styled.div`
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
