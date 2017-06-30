import { call, put, fork, takeLatest, all, take } from 'redux-saga/effects';
import api from '../services';
import * as types from '../constants';

function* fetchLayout() {
  try {
    const { response } = yield call(api.fetchLayout);
    yield put({ type: types.FETCH_LAYOUT_SUCESS, response });
  } catch (e) {
    yield put({ type: types.FETCH_LAYOUT_FAILED, message: e.message });
  }
}

function* fetchMarkets() {
  try {
    const { response } = yield call(api.fetchMarket);
    yield put({ type: types.FETCH_MARKETS_SUCESS, response });
  } catch (e) {
    yield put({ type: types.FETCH_MARKETS_FAILED, message: e.message });
  }
}

function* watchLoadLayout() {
  yield takeLatest(types.FETCH_LAYOUT, fetchLayout);
  //yield call(fetchLayout) 
}

function* watchLoadMarkets() {
  yield takeLatest(types.FETCH_MARKETS, fetchMarkets);
  //yield call(fetchMarkets) 
}

export default function* root() {
  yield all([
    fork(watchLoadLayout),
    fork(watchLoadMarkets)
  ])
}