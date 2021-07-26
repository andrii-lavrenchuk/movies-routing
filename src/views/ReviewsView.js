import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';

const ReviewsView = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=af6a87365963f0e1cfa96cb09744561b`,
      )
      .then(({ data: { results } }) => {
        if (results.length === 0) {
          alert('No reviews');
          return;
        }
        setReviews(results);
      });
  }, [movieId]);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <ShowMoreText>
              <p>Review: {review.content}</p>
            </ShowMoreText>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsView;
