import React from "react";
import Movies from "../components/Movies.jsx";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
export default class Index extends React.Component{
  state = {
    movies: [],
    loading: true
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=996de905&s=wednesday")
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }
  searchMovies = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=996de905&s=${str}${type != 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    return(
        <div className="content container">
          <Search searchMovies={this.searchMovies} />
          {this.state.loading ? <Loader />  : (<Movies movies={this.state.movies} />)}
        </div>
    )
  }
}