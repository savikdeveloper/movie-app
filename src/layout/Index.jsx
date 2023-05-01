import React, {useState, useEffect} from "react";
import Movies from "../components/Movies.jsx";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";
export default function Index(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=996de905&s=${str}${type != 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          setMovies(data.Search)
        })
  }

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=996de905&s=wednesday")
        .then(response => response.json())
        .then(data => {
          setMovies(data.Search);
          setLoading(false);
        })
  }, [])

  return(
      <div className="content container">
        <Search searchMovies={searchMovies} />
        {loading ? <Loader />  : (<Movies movies={movies} />)}
      </div>
  )
}