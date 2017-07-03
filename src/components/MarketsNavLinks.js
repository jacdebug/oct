import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const MarketsNavLinks = ({ marketData, marketSelectedId, marketsLoaded }) => {
  return (
    <div>
      {marketsLoaded.map((market, index) =>
        <MarketsNavLinkCTA
          to={`/${market}`}
          key={index}
          selected={market === marketSelectedId}
        >
          {marketData.markets[market].name}
        </MarketsNavLinkCTA>
      )}
    </div>
  );
};

export default MarketsNavLinks;

const MarketsNavLinkCTA = styled(({ ...rest }) => <NavLink {...rest} />)`
  display: block;
  margin: 4px 0;
  padding: 15px;
  width: 200px;

  background: ${props => props.theme.tcolor1};
  border: 1px solid ${props => props.theme.tcolor1};
  border-radius: 2px;
  
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;

  ${props =>
    props.selected &&
    css`
    background: ${props => props.theme.tcolor5};
    border: 1px solid ${props => props.theme.tcolor3};
  `};
`;
