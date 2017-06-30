import React from 'react';
import { connect } from 'react-redux';
import { fetchMarkets } from '../actions';
import { getLayoutData } from '../reducers/selectors';
import Market from '../components/Market';

const mapDispatchToProps = dispatch => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

const mapStateToProps = state => ({
  market: getMaketData(state),
});

class MarketContainer extends React.Component {
  componentWillMount() {
    this.props.fetchMarkets();
  }

  render() {
    return <Market {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);
