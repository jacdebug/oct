import React from 'react';
import { ThemeProvider } from 'styled-components';
import MarketsContainer from '../containers/MarketsContainer';
import Header from './Header';
import Footer from './Footer';
import theme from '../constants/colors';

const AppRoot = ({ ...props }) =>
 <ThemeProvider theme={theme}>
  <div className="App">
   
    <Header {...props} />
    <MarketsContainer {...props} />
    <Footer {...props} />
    
  </div>
  </ThemeProvider>;

export default AppRoot;
