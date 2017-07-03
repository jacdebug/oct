import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRootContainer from '../containers/AppRootContainer';
import store from '../store';

const App = () =>
  <Provider store={store}>
    <Router>
      <AppRootContainer />
    </Router>
  </Provider>;

export default App;
