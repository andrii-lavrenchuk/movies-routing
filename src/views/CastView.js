import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import notFoundImg from '../images/notFound.png';

const CastView = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=af6a87365963f0e1cfa96cb09744561b`,
      )
      .then(response => setCasts(response.data.cast));
  }, [movieId]);
  return (
    <>
      <h1>Cast</h1>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <h2>Name: {cast.name}</h2>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                    : notFoundImg
                }
                alt={cast.name}
              />
              <h3>Character: {cast.character}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CastView;
