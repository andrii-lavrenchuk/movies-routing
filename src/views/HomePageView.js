import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

const HomePageView = () => {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=af6a87365963f0e1cfa96cb09744561b',
      )
      .then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <h1>Welcome to Home Page</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>
                {/* <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : null
                  }
                  alt={movie.title}
                /> */}
                {movie.title ? movie.title : movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePageView;
