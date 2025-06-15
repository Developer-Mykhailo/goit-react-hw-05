// import s from "./MovieReviews.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsAPI } from "../../service/moviedbAPI";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  //
  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const { results } = await getMovieReviewsAPI(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId]);

  //JSX
  return (
    <div>
      <ul className={s.reviews_list}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={s.author}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
