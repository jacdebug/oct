import * as types from '../constants';

const market = (state = { marketsLoaded: [] }, action) => {
  switch (action.type) {
    case types.FETCH_MARKETS_SUCESS:
      let marketsLoaded = [];
      if (action.response.marketData) {
        marketsLoaded = Object.keys(action.response.marketData.markets);
      }
      return Object.assign({}, state, action.response, { marketsLoaded });

    case types.SET_MARKET:
      return Object.assign({}, state, { marketSelectedId: action.payload.id });

    default:
      return state;
  }
};

export default market;
