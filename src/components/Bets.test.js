import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Bets from './Bets';

const testData = [
  {
    name: 'Barcelona',
    genericName: 'HOME',
    bestOddsDecimal: 1.05,
  },
  {
    name: 'Empate',
    genericName: 'DRAW',
    bestOddsDecimal: 15,
  },
  {
    name: 'Granada',
    genericName: 'AWAY',
    bestOddsDecimal: 51,
  },
];

it('renders without crashing', () => {
  shallow(<Bets bets={testData} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Bets bets={testData} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders list of bets', () => {
  const wrapper = shallow(<Bets bets={testData} />);
  expect(wrapper.find('.odds')).toHaveLength(3);
});
