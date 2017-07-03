import styled, { css } from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${props =>
    props.minHeight &&
    css`
    min-height: ${props.minHeight};
  `} ${props =>
      props.contentCenter &&
      css`
    justify-content: center;
  `};
`;

export default Box;
