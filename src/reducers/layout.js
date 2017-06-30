import * as types from '../constants';

const layout = (state = { sportLinks: [], headerLinks:[], footerLinks:[]}, action) => {
  switch (action.type) {
    case types.FETCH_LAYOUT_SUCESS:
      return Object.assign({}, state, action.response.navigation);

    default:
      return state;
  }
};

export default layout;
