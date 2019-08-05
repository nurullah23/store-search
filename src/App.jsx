import React from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import SearchBar from './containers/SearchBar.jsx';
import StoreResults from './containers/StoreResults.jsx';

const App = () => (
  <div className="App">
    <header className="App-header">
      <SearchBar />
      <StoreResults />
    </header>
  </div>
);

export default connect()(App);
