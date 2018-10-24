import React from 'react'

class MovieRow extends React.Component {
    render() {
        return <div key={this.props.movie.id} className="movie">
        <div className="movieImage">
          <img src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} alt="movie poster"/>
        </div>

        <div className="movieDetails">
          <h2 className="movieTitle">{this.props.movie.title}</h2>
          <p className="movieOverview">Overview: {this.props.movie.overview}</p>

          <div className="buttonGroup">
            <button className="playButton">Play</button>
            <button className="viewButton">View</button>
          </div>
        </div>

      </div>
    }
}

export default MovieRow