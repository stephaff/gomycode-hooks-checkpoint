import './MovieList.css';
import Movie from '../movie/Movie';

const MovieList = ( { movies, searchMovie } ) => {

  return (
    <div>
      <div className='movie-list'>
        {movies.filter(movie => {
          if(searchMovie === ""){
            return movie;
          }
          else if (movie.title.toLocaleLowerCase().includes(searchMovie.toLocaleLowerCase())) {
            return movie;
          }
          return 0;
        }).map(movies => {
            return <Movie movies={ movies } key={ movies.id } />;
          })
        }
      </div>
    </div>
  )
}

export default MovieList;