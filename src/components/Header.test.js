import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header layout={[]} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Header layout={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
