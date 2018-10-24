import React, { Component } from 'react';
import './App.css';
import MovieRow from './movieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch()
  }

  performSearch(searchTerm) {

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          const movieRow = <MovieRow key={movie.id} movie={movie}/>

          movieRows.push(movieRow);
        })

        this.setState({rows:movieRows})
      },
      error: (xhr, status, err) => {
        console.log("error")
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

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

        <div className="searchArea">
          <input onChange={this.searchChangeHandler.bind(this)} placeholder="Search movies" className="searchBar"></input><i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
