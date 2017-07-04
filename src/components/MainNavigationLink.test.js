import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainNavigationLink from './MainNavigationLink';

const linkTestData = {
  name: 'name1',
  url: '/',
};

it('renders without crashing', () => {
  shallow(
    <MainNavigationLink to={linkTestData.url}>
      {linkTestData.name}
    </MainNavigationLink>
  );
});

it('renders a snapshot', () => {
  const tree = shallow(
    <MainNavigationLink to={linkTestData.url}>
      {linkTestData.name}
    </MainNavigationLink>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
