import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MarketSelectedLoaded from './MarketSelectedLoaded';

const market = { marketsLoaded: [], marketData: { banner: { home: true } } };

it('renders without crashing', () => {
  shallow(
    <MarketSelectedLoaded selectedMarketData={{ type: '' }} market={market} />
  );
});

it('renders a snapshot', () => {
  const tree = shallow(
    <MarketSelectedLoaded selectedMarketData={{ type: '' }} market={market} />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
