import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";

class ImprovedMovieList extends Component {
  //  we use `constructor` as we pass movies through props to set the as `state` value
  //  Even though  there is a use case for this pattern,
  //  Setting initial state from the props is an anti-pattern,
  //	and `componentDidUpdate` lifecycle method should be used insted
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray
    };
  }

  deleteMovie = movieId => {
    const moviesCopy = this.state.movies.filter(movie => movie._id !== movieId);

    this.setState({ movies: moviesCopy });
  };

  render() {
    return (
      <ul>
        {this.state.movies.map(oneMovie => {
          return (
            <ImprovedCard
              key={oneMovie._id}
              {...oneMovie}
              clickToDelete={() => this.deleteMovie(oneMovie._id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImprovedMovieList;
