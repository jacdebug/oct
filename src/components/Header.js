import React from 'react';
import styled from 'styled-components';
import logo from '../assets/oc-logo.png';
import Box from './Box';
import Links from './Links';

export const Header = ({ layout }) =>
  <HeaderTag>
    <Logo href="/" title="Oddschecker" />
    <Box>
      <Box>
        <Links links={layout.sportLinks} />
      </Box>
      <MenuBreak />
      <Box>
        <Links bright links={layout.headerLinks} />
      </Box>
    </Box>
  </HeaderTag>;

export default Header;

const HeaderTag = styled.header`
  border-top: 2px solid ${props => props.theme.tcolor3};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;
`;

const Logo = styled.a`
  background-image: url(${logo});
  background-size: 220px;
  display: inline-block;
  margin: 0 0 0 10px;
  width: 220px;
  height: 45px;
`;

const MenuBreak = styled.div`
  border-right: 1px solid ${props => props.theme.tcolor3};
  height: 25px;
  margin: 0 10px;
  opacity: 0.5;
`;
