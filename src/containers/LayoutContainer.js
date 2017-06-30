import React from 'react';
import { connect } from 'react-redux';
import { fetchLayout } from '../actions';
import { getLayoutData } from '../reducers/selectors';
import Layout from '../components/Layout';

const mapDispatchToProps = dispatch => ({
  fetchLayout: () => {
    dispatch(fetchLayout());
  },
});

const mapStateToProps = state => ({
  layout: getLayoutData(state),
});

class LayoutContainer extends React.Component {
  componentWillMount() {
    this.props.fetchLayout();
  }

  render() {
    return <Layout {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
