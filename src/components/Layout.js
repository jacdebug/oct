import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';




export const Footer = styled.div`
  background:#2B364B; 
  border-top: 4px solid #707886;
`;

export const FlexItem = styled.div`
  
`;

export const Teams = styled.div`
  
`;

export const Team = styled.div`
  
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
  ${props =>
    props.left &&
    css`
		justify-content: flex-start;
	`} ${props =>
      props.right &&
      css`
		justify-content: flex-end;
	`};
`;

const Layout = ({ layout }) =>
  <div>
    <header>
      <img src="assets/oc-logo.png"/>
      {layout.sportLinks.map(link =>
        <NavLink to={link.url}>
          {' '}{link.name}{' '}
        </NavLink>
      )}
      {layout.headerLinks.map(link =>
        <NavLink to={link.url}>
          {' '}{link.name}{' '}
        </NavLink>
      )}
    </header>

    <FlexBox>
      <FlexItem>
        <button />
        <button />

       


      </FlexItem>

      <FlexItem>
        <Teams>
          <Team />
          <Team />
        </Teams>
      </FlexItem>
    </FlexBox>

    <Footer>
      {layout.footerLinks.map(link => 
        <NavLink to={link.url}>
          {' '}{link.name}{' '}
        </NavLink>
      )}
    </Footer>
  </div>;

export default Layout;


/*


 
    <div style='display:flex; background:green'>
    <div style='flex-basis: 30%;background:yellow'>link1</div>
        <div style=''>link1</div>
  </div>

  <br/>
  
  
    <div style='display:flex; background:green'>
    <div style='flex-basis: 30%;background:yellow'>link1</div>
        <div style=''>link1</div>
  </div>

  
  <div style='color:#F2F2F3; display:flex; justify-content:space-around;'>
    <div style=''>link1</div>
        <div style=''>link1</div>
        <div style=''>link1</div>
        <div style=''>link1</div>
  </div>

   <Switch>
              
              <Route key="route-home" exact path="/" component={LayoutContainer} />
              <Route
                key="route-file"
                path="/files/:type?/:param1?/:param2?/:param3?"
                component={LayoutContainer}
              />
            </Switch>


*/