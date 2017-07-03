import React from 'react';
import { connect } from 'react-redux';
import { fetchMarkets } from '../actions';
import { getMaketData } from '../reducers/selectors';
import Markets from '../components/Markets';

const mapDispatchToProps = dispatch => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

const mapStateToProps = state => ({
  market: getMaketData(state),
});

class MarketsContainer extends React.Component {
  componentWillMount() {
    this.props.fetchMarkets();
  }

  render() {
    return <Markets {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
