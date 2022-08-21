import React from 'react';
import '../navbar/Navbar.css';
import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';
import AddMovie from '../addMovie/AddMovie';
import MovieRef from '../movieRef/MovieRef';

const Navbar = ( { addMovie, setSearchMovie }) => {
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            {/* <MovieRef /> */}
            <Logo title="StephMovie" />
            <SearchBar setSearchMovie={ setSearchMovie } />
            <AddMovie addMovie={ addMovie } />
        </div>
    </nav>
  )
}

export default Navbar;