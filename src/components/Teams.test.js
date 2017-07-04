import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Teams from './Teams';

const home = {
  name: 'Barcelona',
  logo: 'barcelona.png',
};

const away = {
  name: 'Granada',
  logo: 'granada.png',
};

it('renders without crashing', () => {
  shallow(<Teams home={home} away={away} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Teams home={home} away={away} />);
  expect(toJson(tree)).toMatchSnapshot();
});
