import React from 'react';
import '../movieRef/MovieRef.css';

const MovieRef = () => {
  return (
    <div className='movie-ref'>
        <div className="movieRef-title">
            <h3>Titre</h3>
            <input type="text" />
        </div>
        <div>
            <h3 className="movieRef-poster">Poster</h3>
            <input type="file" hidden />
        </div>
        <div className="movieRef-url">
            <h3 className='url'>URL</h3>
            <input type="text" />
            <span className='btn-close'>X</span>
        </div>
    </div>
  )
}

export default MovieRef;