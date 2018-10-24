import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="logo">
            <img src="/slate.png" alt="logo"/>
          </div>
          <div id="page-name">
            MoviesDB Search
          </div>
        </header>

        <input placeholder="Search movies" className="searchBar"></input><i className="fa fa-search fa-2x" aria-hidden="true"></i>
        
      </div>
    );
  }
}

export default App;
