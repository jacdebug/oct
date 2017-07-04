import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppRoot from './AppRoot';

it('renders without crashing', () => {
  shallow(<AppRoot />);
});

it('renders a snapshot', () => {
  const tree = shallow(<AppRoot />);
  expect(toJson(tree)).toMatchSnapshot();
});
