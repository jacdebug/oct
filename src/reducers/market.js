import * as types from '../constants';

const market = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MARKETS_SUCESS:
      return Object.assign({}, state, action.response);

    default:
      return state;
  }
};

export default market;
