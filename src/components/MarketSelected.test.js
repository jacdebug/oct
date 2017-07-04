import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MarketSelected from './MarketSelected';

const market = { marketsLoaded: [] };

it('renders without crashing', () => {
  shallow(<MarketSelected selectedMarketData={true} />);
  shallow(<MarketSelected selectedMarketData={false} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<MarketSelected selectedMarketData={true} />);
  expect(toJson(tree)).toMatchSnapshot();
});
