import React from 'react';
import './AddMovie.css';

const AddMovie = ( { setAddWindow }) => {
  return (
    <button className='btn-add-movie' onClick={ setAddWindow }>Add movie</button>
  )
}

export default AddMovie;