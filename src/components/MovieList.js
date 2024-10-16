import React from 'react'
import MovieCard from './MovieCard'
const Movielist = ({movies}) => {
    return (
        <div className='movielist'>
            {movies.map((el)=> (
                <MovieCard movie={el} key = {el.id}/> 
            ))}

        </div>
    )

}
   

export default Movielist