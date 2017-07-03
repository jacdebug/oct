import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainNavigationLink = styled(({ bright, ...rest }) =>
  <NavLink {...rest} />
)`
   padding: 8px 15px;
   text-decoration: none;
   font-size: 13px;

   ${props =>
     props.bright &&
     css`
      color: ${props => props.theme.tcolor4};
  `}
`;

export default MainNavigationLink;
