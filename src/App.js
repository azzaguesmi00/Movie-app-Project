import React, { useState,} from 'react';
import "./App.css";
import Movielist from './components/Movielist';
import {moviesData }from "./data.js"

function App (){
  const [movies ,setMovies]= useState(moviesData);
  return(
    <div className='App'>
      <h1>Movie App</h1>
      <Movielist movies={movies}/>

    </div>

  )

}





export default App;
