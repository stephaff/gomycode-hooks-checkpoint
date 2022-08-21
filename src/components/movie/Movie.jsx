import React from 'react';
import '../movie/Movie.css';

const Movie = ( { title, poster } ) => {
  return (
    <div className='movie'>
        <div className="movie-poster">
            <img src={ poster } alt="poster" />
        </div>
        <div className="movie-information">
            <h3 className='movie-title'>{ title }</h3>
            <div className="more">
                <span className='rating'>
                    1 2 3 4 5
                </span>
                <span className="description">
                    ...
                </span>
            </div>
        </div>
    </div>
  )
}

export default Movie;