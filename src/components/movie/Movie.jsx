import React from 'react';
import Rating from '../rating/Rating';
import './Movie.css';

const Movie = ( { movies } ) => {
  return (
    <div className='movie' >
        <div className="movie-poster">
            <img src={ movies.poster } alt="poster" />
        </div>
        <div className="movie-information">
            <h3 className='movie-title'>{ movies.title }</h3>
            <div className="more">
                <Rating />
                <span className="description">
                    ...
                </span>
            </div>
        </div>
    </div>
  )
}

export default Movie;