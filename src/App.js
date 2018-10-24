import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="logo">
            <img src="/slate.png"/>
          </div>
          <div id="page-name">
            MoviesDB Search
          </div>
        </header>
      </div>
    );
  }
}

export default App;
