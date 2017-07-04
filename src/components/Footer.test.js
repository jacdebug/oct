import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

it('renders without crashing', () => {
  shallow(<Footer layout={[]} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Footer layout={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
