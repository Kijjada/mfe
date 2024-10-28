import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <h1> Hi there !!!!!</h1>
        <hr />
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
};
