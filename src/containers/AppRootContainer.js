import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchLayout } from '../actions';
import { getLayoutData } from '../reducers/selectors';
import AppRoot from '../components/AppRoot';

const mapDispatchToProps = dispatch => ({
  fetchLayout: () => {
    dispatch(fetchLayout());
  },
});

const mapStateToProps = state => ({
  layout: getLayoutData(state),
});

class AppRootContainer extends React.Component {
  componentWillMount() {
    this.props.fetchLayout();
  }

  render() {
    return <AppRoot {...this.props} />;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRootContainer)
);
