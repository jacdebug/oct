import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Markets from './Markets';

const market = { marketsLoaded: [] };

it('renders without crashing', () => {
  shallow(<Markets market={market} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Markets market={market} />);
  expect(toJson(tree)).toMatchSnapshot();
});
