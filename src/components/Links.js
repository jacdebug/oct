import React from 'react';
import MainNavigationLink from './MainNavigationLink';

const Links = ({ links, bright }) =>
  <div>
    {links.map((link, index) =>
      <MainNavigationLink bright={bright} to={link.url} key={index}>
        {' '} {link.name} {' '}
      </MainNavigationLink>
    )}
  </div>;

export default Links;
