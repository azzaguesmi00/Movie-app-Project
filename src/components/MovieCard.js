import React from 'react'
import {Button , Card} from "react-bootstrap";
import "./MOvieCard.css"

const MovieCard = ({movies}) => {
  return (
    <div className='moviecard'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default MovieCard