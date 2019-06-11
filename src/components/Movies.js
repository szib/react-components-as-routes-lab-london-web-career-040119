import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(movie => {
            return (
              <div key={movie.title}>
                <p>{movie.title}</p>
                <p>{movie.time}</p>
                <p>{movie.metascore}</p>
                <ul>
                  {movie.genres.map(genre => <li>{genre}</li>)}
                </ul>
              </div>
            )
          })
        }
    </div>
  );
};

export default Movies;
