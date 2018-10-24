import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    const movies = [
      {id: 0, title: "Avengers: Infinity War", overview: "Nulla odio purus, dapibus fermentum vehicula non, vulputate eu lacus. Vestibulum a tellus mattis, semper quam quis, scelerisque mauris. Curabitur nunc quam, venenatis id varius ut, sodales et libero. Suspendisse et suscipit dolor. Cras vel molestie eros, nec bibendum odio. Maecenas vitae iaculis eros. Vivamus egestas efficitur iaculis. Suspendisse vel finibus velit.", imageSource: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wegotthiscovered.com%2Fwp-content%2Fuploads%2F2017%2F12%2F15028202134642-5.jpeg&f=1"},
      {id: 1, title: "Cinderella Man", overview: "Donec lectus massa, vestibulum ac varius eu, sagittis quis leo. Nulla vel leo luctus, finibus velit sed, dictum libero. Cras eget ultricies massa. Sed euismod sem eget posuere fermentum. Maecenas a pellentesque nunc. Proin vitae nibh nec libero placerat malesuada id nec velit.", imageSource: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F4%2F4f%2FCinderella_Man_poster.jpg&f=1"}
    ]

    var movieRows = []

    movies.forEach((movie) => {
      const movieRow = <div key={movie.id} className="movie">
        <div className="movieImage">
          <img src={movie.imageSource} alt="movie poster"/>
        </div>

        <div className="movieDetails">
          <h2 className="movieTitle">{movie.title}</h2>
          <p className="movieOverview">Overview: {movie.overview}</p>

          <div className="buttonGroup">
            <button className="playButton">Play</button>
            <button className="viewButton">View</button>
          </div>
        </div>

      </div>

      movieRows.push(movieRow);
    })

    this.state = {rows:movieRows}
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
        <input placeholder="Search movies" className="searchBar"></input><i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
