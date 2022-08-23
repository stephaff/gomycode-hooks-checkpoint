import React from 'react';
import './SearchBar.css';

const SearchBar = ( { setSearchMovie } ) => {

  function valueChange(e){
    setSearchMovie(e.target.value);
  }

  return (
    <input type="search" placeholder='Search movie...' className='search-bar' onChange={ valueChange } />
  )
}

export default SearchBar;