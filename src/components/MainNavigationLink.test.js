import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationLink from './NavigationLink';

const linkTestData = {
  name: 'name1',
  url: '/',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NavigationLink to={linkTestData.url}>
        {linkTestData.name}
      </NavigationLink>
    </Router>,
    div
  );
});
