import React from 'react';
import { connect } from 'react-redux';
import { getMaketData } from '../reducers/selectors';
import { setMarket } from '../actions';
import MarketSelected from '../components/MarketSelected';

const mapStateToProps = state => ({
  market: getMaketData(state),
});

const mapDispatchToProps = dispatch => ({
  setMarket: data => {
    dispatch(setMarket(data));
  },
});

class MarketSelectedContainer extends React.Component {
  componentWillMount() {
    this.props.setMarket({
      id: this.getSelectedMarket(this.props),
    });
  }

  componentWillReceiveProps(props) {
    const sel = this.getSelectedMarket(props);
    if (this.getSelectedMarket(this.props) !== sel) {
      this.props.setMarket({
        id: sel,
      });
    }
  }

  getSelectedMarket({ match, market }) {
    let selectedMarket = null;
    if (
      match.params.pageid &&
      market.marketsLoaded.indexOf(match.params.pageid) > -1
    ) {
      selectedMarket = match.params.pageid;
    }

    //just for preseletion, this can be removed after proper routing implmentation
    if (selectedMarket === null) selectedMarket = market.marketsLoaded[0];

    return selectedMarket;
  }

  render() {
    return (
      <MarketSelected
        {...this.props}
        selectedMarketData={
          this.props.market.marketData.markets[
            this.props.market.marketSelectedId
          ]
        }
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MarketSelectedContainer
);
