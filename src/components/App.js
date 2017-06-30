import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '../store';
import logo from '../assets/oc-logo.png';
import LayoutContainer from '../containers/LayoutContainer';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <LayoutContainer />

          
        </div>
      </Router>
    </Provider>
  );
};

export default App;
