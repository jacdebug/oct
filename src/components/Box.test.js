import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './Box';

it('renders without crashing', () => {
  shallow(<Box />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Box />);
  expect(toJson(tree)).toMatchSnapshot();
});
