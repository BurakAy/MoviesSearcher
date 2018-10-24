import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
        const movieURL = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = movieURL
    }

    playMovie() {
        const movieURL = "https://www.themoviedb.org/movie/" + this.props.movie.id +"/videos"
        window.location.href = movieURL
    }

    render() {
        const posterPath = "https://image.tmdb.org/t/p/w185";

        return <div key={this.props.movie.id} className="movie">
        <div className="movieImage">
          <img src={posterPath + this.props.movie.poster_path} alt="movie poster"/>
        </div>

        <div className="movieDetails">
          <h2 className="movieTitle">{this.props.movie.title}</h2>
          <p className="movieOverview">Overview: {this.props.movie.overview}</p>

          <div className="buttonGroup">
            <button className="playButton" onClick={this.playMovie.bind(this)}>Play</button>
            <button className="viewButton" onClick={this.viewMovie.bind(this)}>View</button>
          </div>
        </div>

      </div>
    }
}

export default MovieRow