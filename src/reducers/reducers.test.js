import reducers from './index';

const initState = {
  layout: {
    footerLinks: [],
    headerLinks: [],
    sportLinks: [],
  },
  market: {
    marketsLoaded: [],
  },
};

test('reducers init', () => {
  let state = reducers(initState, {
    type: 'NOT_MATCH_ANYTHING',
    response: {},
  });

  expect(state).toEqual(initState);
});