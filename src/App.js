import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import { moviesData } from './data';
import AddMovie from './components/AddMovie';
import FilterName from './components/FilterName';
import FilterRate from'./components/Rating';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("")
const [rating, setRating] = useState(1)

  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      <h1>Movie APP</h1>
      <FilterName  inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterRate rating={rating} setRating={setRating} isMovieRating={false}/>
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch}  rating={rating}/>
    </div>
  );
}

export default App;
