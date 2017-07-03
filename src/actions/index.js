import * as types from '../constants';

export const fetchLayout = () => ({
  type: types.FETCH_LAYOUT,
  payload: {},
});

export const fetchMarkets = () => ({
  type: types.FETCH_MARKETS,
  payload: {},
});

export const setMarket = data => ({
  type: types.SET_MARKET,
  payload: data,
});
