import React, {useState} from "react";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("wednesday");
  const [type, setType] = useState("all");

  const handleKey = (e) =>{
    if(e.key === 'Enter'){
      searchMovies(search, type)
    }
  }

  const handleFilter = (e) =>{
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type)
  }

  return(
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Search"
                type="search"
                className="validate"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
              />
              <button className="btn search-btn" onClick={(e) => {
                e.preventDefault();
                searchMovies(search, type)
              }}>
                SearchMovies
              </button>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type" type="radio"
                  checked={type === 'all'}
                  data-type="all"
                  onChange={handleFilter}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type" type="radio"
                  data-type="movie"
                  onChange={handleFilter}
                  checked={type === 'movie'}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type" type="radio"
                  data-type="series"
                  onChange={handleFilter}
                  checked={type === 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    )
}