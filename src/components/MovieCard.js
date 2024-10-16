import React from 'react';
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./MOvieCard.css";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  // Function to display star rating
  const Stars = (rate) => {
    const rateStars = Math.min(rate, 5); // ensure the number of stars does not > 5

    return (
      <>
        {}
        {Array(rateStars).fill().map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </>
    );
  };

  return (
    <div className='moviecard'>
      <Card style={{ width: '18rem' }}>
        <Card.Img className='img-card' variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className='desc'>
            {movie.description}
          </Card.Text>
          <div className='rating'>
            {Stars(movie.rate)}  {/* Display star rating */}
          </div>
          <Link to={`/movie/${movie.id}`} ><Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
