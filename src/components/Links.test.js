import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Links from './Links';

const linksTestArray = [
  {
    name: 'link1',
    url: '/',
  },
  {
    name: 'link3',
    url: '/',
  },
];

it('renders without crashing', () => {
  shallow(<Links links={linksTestArray} />);
});

it('renders a snapshot', () => {
  const tree = shallow(<Links links={linksTestArray} />);
  expect(toJson(tree)).toMatchSnapshot();
});

it('renders list of links', () => {
  const wrapper = shallow(<Links links={linksTestArray} />);
  expect(wrapper.find('Styled(Component)')).toHaveLength(2);
});
