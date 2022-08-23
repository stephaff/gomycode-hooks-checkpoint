import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';
import AddMovie from '../addMovie/AddMovie';
import MovieRef from '../movieRef/MovieRef';

const Navbar = ( { addMovie, setSearchMovie }) => {

  const [addWindow, setAddWindow] = useState(false);

  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <MovieRef addWindow={ addWindow } setAddWindow={ setAddWindow } addMovie={ addMovie } />
            <Logo title="StephMovie" />
            <SearchBar setSearchMovie={ setSearchMovie } />
            <AddMovie setAddWindow={ setAddWindow } />
        </div>
    </nav>
  )
}

export default Navbar;