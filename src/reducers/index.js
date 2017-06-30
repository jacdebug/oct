import { combineReducers } from 'redux';
import market from './market';
import layout from './layout';

const rootReducer = combineReducers({
  layout,
  market,
});

export default rootReducer;
