import React from 'react';
import styled from 'styled-components';
import Links from './Links';

export const Footer = ({ layout }) =>
  <FooterTag>
    <Links links={layout.footerLinks} />
  </FooterTag>;

export default Footer;

export const FooterTag = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 0;
  background: ${props => props.theme.tcolor1};
  border-top: 2px solid ${props => props.theme.tcolor2};
`;
