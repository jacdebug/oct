import * as types from '../constants';

const layout = (
  state = { sportLinks: [], headerLinks: [], footerLinks: [] },
  action
) => {
  switch (action.type) {
    case types.FETCH_LAYOUT_SUCESS:
      const nav = action.response && action.response.navigation;
      return Object.assign({}, state, nav);

    default:
      return state;
  }
};

export default layout;
