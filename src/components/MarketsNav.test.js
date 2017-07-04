import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MarketsNav from './MarketsNav';

const marketTrueValue = { marketData: {} };
const marketFalseValue = {};

it('renders without crashing', () => {
  shallow(<MarketsNav market={marketTrueValue} />);
  shallow(<MarketsNav market={marketFalseValue} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<MarketsNav market={marketTrueValue} />);
  expect(toJson(tree)).toMatchSnapshot();
});
