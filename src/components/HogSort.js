import React, { Component } from 'react';



class HogSort extends Component {

  state = {
    sortBy: ,
    hogs: []
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='search-input'>Search Movie Reviews</label>
          <input
            id='search-input'
            type="text"
            style={{ width: 300 }}
            onChange={ this.handleSearchInputChange } />
          <button type="submit">Submit</button>
        </form>
        { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
        <MovieReviews reviews={ this.state.hogs} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;
