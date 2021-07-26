import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CastView from './CastView';
import ReviewsView from './ReviewsView';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  const { movieId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=af6a87365963f0e1cfa96cb09744561b`,
      )
      .then(response => setMovie(response.data));
  }, [movieId]);

  return (
    <>
      <h1>MovieDetailsPage</h1>
      {movie && (
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : null
            }
            alt={movie.title}
          />
        </>
      )}
      <hr />

      <nav>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Review</NavLink>
      </nav>

      <Switch>
        <Route path={`${path}/cast`}>
          <CastView />
        </Route>
        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
