import MovieList from './components/movieList/MovieList';
import Navbar from './components/navbar/Navbar';
import React, { useState } from 'react';

function App() {

    const [searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies] = useState(
      [
        {
          title : "The one",
          poster : "theOne.jpg",
          url : 'https',
          id : 1
        },
        {
          title : "La casa de papel",
          poster : "casaDePapel.jpg",
          url : 'https',
          id : 2
        },
        {
          title : "Gliadiator",
          poster : "gladiator.jpg",
          url : 'https',
          id : 3
        },
        {
          title : "Matrix",
          poster : "matrix.jpg",
          url : 'https',
          id : 4
        }
      ]
    );
  
    function addMovie(movie){
  
      let oldMovies = [...movies];
      oldMovies.push(movie);
      setMovies(oldMovies);
  
    }
  

  return (
    <div className='wrapper'>
      <Navbar logo="StephMovie" addMovie={ addMovie } setSearchMovie={ setSearchMovie } />
      <MovieList movies={ movies } searchMovie={ searchMovie } />
    </div>
  );
}

export default App;
