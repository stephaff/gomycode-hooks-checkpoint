import React, { useState } from 'react';
import './MovieList.css';
import Movie from '../movie/Movie';
import Navbar from '../navbar/Navbar';

const MovieList = () => {

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
    <div>
      <Navbar logo="StephMovie" addMovie={ addMovie } setSearchMovie={ setSearchMovie } />
      <div className='movie-list'>
        {movies.filter(movie => {
          if(searchMovie === ""){
            return movie;
          }
          else if (movie.title.toLocaleLowerCase().includes(searchMovie.toLocaleLowerCase())) {
            return movie;
          }
          return 0;
        }).map(movie => {
            return <Movie title={movie.title} poster={movie.poster} key={movie.id} />;
          })
        }
      </div>
    </div>
  )
}

export default MovieList;