import React from 'react'
import {Button , Card} from "react-bootstrap";
import "./MOvieCard.css"

const MovieCard = ({movie}) => {
  return (
    <div className='moviecard'>
         <Card style={{ width: '18rem' }}>
      <Card.Img className='img-card' variant="top" src={movie.posteURL} />
      <Card.Body>
        <Card.Title>{movie.titel}</Card.Title>
        <Card.Text className='desc'>
         {movie.description}</Card.Text>
        <Card.Text>{movie.rate}</Card.Text> 
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default MovieCard