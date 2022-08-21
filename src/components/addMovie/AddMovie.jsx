import React from 'react';
import '../addMovie/AddMovie.css';

const AddMovie = ( { addMovie }) => {
  return (
    <button className='btn-add-movie' onClick={ addMovie }>Add movie</button>
  )
}

export default AddMovie;