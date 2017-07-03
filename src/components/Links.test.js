import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Links from './Links';

const linksTestArray = [
  {
    name: 'name1',
    url: '/',
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Links links={linksTestArray} />
    </Router>,
    div
  );
});
