import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MarketsNavLinks from './MarketsNavLinks';

it('renders without crashing', () => {
  shallow(<MarketsNavLinks marketsLoaded={[]} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<MarketsNavLinks marketsLoaded={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
