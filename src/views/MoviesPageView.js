import SeacrhForm from '../Components/SearchForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import notFoundImg from '../images/notFound.png';
import { Link, useRouteMatch } from 'react-router-dom';

const MoviesPageView = () => {
  const [seacrhQuery, setSeacrhQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!seacrhQuery) {
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=af6a87365963f0e1cfa96cb09744561b&query=${seacrhQuery}&page=1&include_adult=false`,
      )
      .then(({ data: { results } }) => setMovies(results));
  }, [seacrhQuery]);

  const onSearch = query => {
    if (seacrhQuery === query) {
      return;
    }
    setSeacrhQuery(query);
  };

  return (
    <>
      <h1>MoviesPage</h1>
      <SeacrhForm onSubmit={onSearch} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>
                <h2>{movie.title}</h2>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : notFoundImg
                  }
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPageView;
